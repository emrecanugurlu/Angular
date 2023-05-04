import { CanMatchFn, Route, UrlSegment } from "@angular/router";

export const canMatchAdminGuard : CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return false;
}

export const canMatchUserGuard : CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    return true;
}



