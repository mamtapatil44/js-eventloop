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
# take conatiner in js file: take function ehich cretaes row and retun the element for perticluatr item
# create IntercationObervale using constructor fun IntersectionObserver with entry as of cfn ,2nd 2nd arg as root of coaninter , for netries use foreach loop check if entry i is Intersection then then only append child of entry atrgent by passing creteRow fun with arg entry.target.dataset.index and then unobserve(entry.taget)
# use for loop for iteration create placeholder give index and height to it ,use obvser.observe(placholder, then append child for placehold with conatiner)
 





 # 5. How does the MutationObserver API work, and when would you use it instead of event listeners?
 # The MutationObserver API allows you to watch for changes in the DOM tree and execute a callback function whenever mutations occur. This is useful when you need to react to dynamic changes (e.g., elements being added, removed, or modified) without manually attaching event listeners to each element.
 # Create a new MutationObserver instance and pass a callback function.
 # Call .observe(targetNode, config) to start observing changes.
 # When changes happen, the callback function receives a list of mutation records detailing what changed.
 # there are three types of mutuation tye = childlist, attributes,characterData
 #
 
 
 
 
 
 
 
 # 6. What are the pros and cons of using appendChild() vs  insertAdjacentHTML()?
 # Both appendChild() and insertAdjacentHTML() allow you to modify the DOM, but they serve different purposes and have unique advantages and disadvantages.
 # 1.appendChild() : The appendChild() method is used to add a DOM element as a child of another element. It only works with Node objects not working with raw HTML strings.
 # 2.insertAdjacentHTML(): The insertAdjacentHTML() method inserts raw HTML as a string at a specific position relative to an element (beforebegin, afterbegin, beforeend, afterend).
 # Use appendChild() :
 #         a.You are working with DOM elements (createElement()).
 #         b.Security is a concern to prevents XSS attacks.
 #         c.You need to manipulate the element after inserting it.
 # Use insertAdjacentHTML()
 #         a.You want to insert raw HTML as a string.
 #         b.You need precise positioning (beforebegin, afterbegin, etc.).
 #         c.You are working with large chunks of static HTML (e.g., rendering templates).

 