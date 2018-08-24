import {Injectable} from "@angular/core";
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest, HttpResponse,
  HttpSentEvent, HttpUserEvent
} from "@angular/common/http";
import {Observable} from "rxjs";
import {Settings} from "..";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private settings: Settings) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const accessToken = this.settings.accessToken || '';
    const userId = this.settings.userId || '';
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken,
        'X-UserId': userId,
      }
    });
    return next.handle(req);
  }
}
