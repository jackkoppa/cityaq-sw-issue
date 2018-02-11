# cityAQ

Clone of [cityAQ repo](https://github.com/jackkoppa/cityaq), to reproduce original Service Worker issue found there (reported on [Stack Overflow](https://stackoverflow.com/questions/48565629/how-to-handle-routing-in-angular-5-service-workers) & in Angular [#21363](https://github.com/angular/angular/issues/21636)). Even as workarounds are tried on the main repo, the problem will remain visible on this GitHub pages: https://jackkoppa.github.io/cityaq-sw-issue.

## Reproductions steps:
1. Visit https://jackkoppa.github.io/cityaq-sw-issue in Chrome Incognito - page should load normally
2. In Developer Tools, under the Network tab, check offline
3. Refresh the page (if it works the first time, refresh again)

**Expected:** Because the Angular `ServiceWorkerModule` is installed & configured, the page should load
**Fail:** The page fails to load any content; Network tab shows a `504 - Gateway Timeout` error

4. While still offline, remove the `/search` portion of the URL (which is the primary app route). URL should now look again like https://jackkoppa.github.io/cityaq-sw-issue
5. Press "Enter" in URL bar - page loads

**Explanation:** In many cases, the `ServiceWorkerModule` currently fails to handle non-index routes