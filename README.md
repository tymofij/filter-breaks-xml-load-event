If webextension simply uses filterResponseData API to process an XML document, its window.load event does not fire.
Processed HTML documents still fire window.load events.

Actual results with test addon enabled:

https://tymofij.github.io/filter-breaks-xml-load-event/example.xml (unmatched) - window.load fires

https://tymofij.github.io/filter-breaks-xml-load-event/example.fb2.xml (matched) - window.load does not fire

https://tymofij.github.io/filter-breaks-xml-load-event/example.fb2.html (matched) - window.load fires

Expected results:

window.load fires in all cases.
