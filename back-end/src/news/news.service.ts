import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";
import { AxiosError, AxiosRequestConfig } from "axios";
import { News } from "./news.interface";

@Injectable()
export class NewsService {
  private readonly url = "http://localhost:3001/news";
  private readonly config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<News[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<News[]>(`${this.url}?_sort=-update_date&_limit=17`)
        .pipe(
          catchError((error: AxiosError) => {
            throw new NotFoundException();
          }),
        ),
    );

    return data;
  }

  async findOne(entry_id: number): Promise<News[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<News[]>(`${this.url}?entry_id=${entry_id}`).pipe(
        catchError((error: AxiosError) => {
          throw new NotFoundException();
        }),
      ),
    );

    return data;
  }

  async create(body: News): Promise<News> {
    const { data } = await firstValueFrom(
      this.httpService.post<News>(this.url, body, this.config).pipe(
        catchError((error: AxiosError) => {
          throw new BadRequestException();
        }),
      ),
    );

    return data;
  }

  async update(id: string, body: News): Promise<News> {
    const { data } = await firstValueFrom(
      this.httpService.put<News>(`${this.url}/${id}`, body, this.config).pipe(
        catchError((error: AxiosError) => {
          throw new BadRequestException();
        }),
      ),
    );

    return data;
  }
}
