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





 # 7. How does the Shadow DOM impact event propagation? :to make shadow :use attachShadow({ mode: "open" })
 # The Shadow DOM creates an encapsulated DOM tree inside an element, isolating styles and scripts from the main document. However, it also affects event propagation by modifying how events bubble up and pass through the DOM.
 # How Events Propagate in the Shadow DOM :
 # Normally, events in the regular DOM follow this three-phase propagation model:
 #            a.Capturing Phase (Event travels from window → document → html → body → target element)
 #            b.Target Phase (Event reaches the element that was interacted with)
 #            c.Bubbling Phase (Event bubbles back up from the target to window)

 # In the Shadow DOM, event propagation differs in two key ways:
 # 1.Events Do Not Bubble Out of a Shadow DOM by Default
 #              a.When an event occurs inside a Shadow DOM, it bubbles only within the shadow tree.
 #              b.The event stops at the shadow boundary and does not reach the light DOM (outside world).refer example showdom
 # 2.composed: true Allows Events to Escape the Shadow DOM:
 #         By default, events inside the Shadow DOM do not escape. However, if an event is created with { composed: true },   it can cross the shadow boundary and propagate to the light DOM.
 #
 #





 # 9. Explain the concept of reflow and repaint in the browser and how they impact performance.
 # When you modify the DOM or apply styles, the browser must update the page. This process involves reflow and repaint, which affect rendering performance.
 # #What is Reflow?
 # - Reflow (also called layout) occurs when the browser recalculates the positions and dimensions of elements due to changes in the DOM or CSS.
 # - It affects the entire page or a portion of it, depending on the changes made.
 # #What Causes Reflow?
 #      -Adding, removing, or modifying elements in the DOM
 #      -Changing an element’s size, width, height, padding, margin, border
 #      -Changing font size or content inside an element
 #      -Calling getComputedStyle() or layout properties like offsetHeight, offsetWidth
 #      -Applying CSS animations or transitions that affect layout
 #  #Performance Impact
 # ----Reflow is expensive because the browser must:
 #      -Recalculate layout for affected elements
 #      -Recalculate child elements (since parent changes affect children)
 #      -Repaint everything if necessary
 #  ###What is Repaint?
 #     -Repaint happens when visual changes occur without affecting layout (no recalculating positions or sizes).
 #     -It's faster than reflow because only the pixel colors need to be updated.
# #### What Causes Repaint?
#   -Changing colors, visibility (opacity, background, box-shadow)
#   -Updating text color or border color
#   -Applying CSS effects like shadows, outlines, or filters
 # ###Performance Impact
#    Less costly than reflow, but still impacts performance.
#    Too many repaints (e.g., frequent color changes) can slow down rendering
 #
 # to optimzation use css claases classlist to it will changes only once
 # Use visibility: hidden Instead of display: none
 #



 # 10.How does the contenteditable attribute affect event handling and DOM manipulation?
 # The contenteditable attribute allows users to edit an element’s content directly in the browser. However, this introduces unique behavior regarding event handling, DOM manipulation, and performance.
 #