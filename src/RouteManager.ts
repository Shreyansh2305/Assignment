export default class RouteManager {
  static presenter: any = null;
  static leftMenus: any[] = [];
  static setPresenter(presenter: any) {
    this.presenter = presenter;
    // IntercomManager.trackEvent("page", { url: window.location.pathname });
  }
  static navigateToPage(
    pageRoute: string,
    param: any = null,
    module?: any,
    action?: any
  ) {
    RouteManager.presenter?.props?.history?.push(
      pageRoute + (param ? '?' + param : '')
    );
  }
}
