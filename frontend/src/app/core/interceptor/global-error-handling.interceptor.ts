import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const globalErrorHandlingInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const toastr = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const status = error.status;
      const message = error.error.message || 'An unexpected error occurred';

      if (status == 401 || status == 403) {
        toastr.warning(message);
      } else {
        toastr.error(message);
      }

      return throwError(() => new Error(message));
    })
  );
};
