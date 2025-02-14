# 1.what is document.createDocumentFragment() ?
# ans : It is built in function of js which creates empty , in-memory lightwieht conatiner. it is temporary so dont have visual representation in the DOM, it holds tree node
# by using a DocumentFragment, you can batch multiple DOM changes like adding or removing child elements into a single operation, which helps reduce performance overhead, as it minimizes the number of reflows.



# 2.Explain the difference between innerHTML, outerHTML, and textContent in JavaScript?
# ans: 
# a. In JavaScript, innerHTML, outerHTML, and textContent are properties used to manipulate or retrieve content from an HTML element, but they have different purposes.
#               1.innerHtml: a.Represents the HTML content inside an element
#                            b. can be set and get html content
#                            c. If used to set content, it parses HTML and renders it as actual elements.
#               2.outerHTML:
#                            a.Represents the entire element (including itself).
#                            b.When getting outerHTML, it returns the entire element as an HTML string.
#                            c.When setting outerHTML, it replaces the element itself with the new HTML element
#               3.textContent :
#                            a.Represents the text content of an element (without any HTML formatting).
#                            b.does not interpret any HTML tags.
#                            c.Safer than innerHTML when inserting user-generated content because it prevents HTML inj.
# uses : Use innerHTML when you need to insert HTML dynamically.
#        Use outerHTML when you need to replace an entire element.
#        Use textContent when you want to set or retrieve only text without parsing HTML.



# 3. How would you dynamically create and append multiple elements to the DOM without causing excessive reflows?
# ans: 4ways : Use a Document Fragment , Use innerHTML for Large Batches , Use append() or appendChild() in Bulk and Use requestAnimationFrame() for Heavy Updates.
#       # A DocumentFragment : is an in-memory lightweight container that allows batch operations before attaching   e elements to the actual DOM. This prevents excessive reflows.For this we cn use createDocumentFragment() , use for loop for bulk operatins and append to body with childAppend(),Efficient: Only one reflow occurs when the fragment is appended.
#       # innerHtml :with this we can Insert all at once atlast if iteration done, for this we need one htmlstring variable whole stores all values of iteration and after fooer loop we can attached it using innerHtml property
#      # Use append() or appendChild() : When working with Node.append() or Node.appendChild(), batch operations before appending to reduce layout recalculations.
# innerhtml and append for small check
# documentfragement for larger chunks
#



# 4.What is the fastest way to update the DOM when dealing with large amounts of data?
# ans:use dcreDocumentFragement(),innerhtml and append apeart from that we can use Virtualized Lists (Best for Extremely Large Datasets) means virtual scrolling with insersection obeservable
#
 