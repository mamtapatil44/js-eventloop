# 11. How does event bubbling work in JavaScript, and what happens when multiple event handlers are attached to nested elements?
# ans :
# Event bubbling is a mechanism in the DOM  where an event that occurs on a nested element first triggers on the target element and then propagates up through its parent in the DOM hierarchy.
# How It Works:
# a.When an event occurs on an element, it first goes through the capturing phase (from the root to the target element).
# b.The event then reaches the target phase (executing on the target element).
# c.Finally, the event enters the bubbling phase, where it propagates upward from the target element to its parents until it reaches the root of the document.
# When multiple event handlers are attached to nested elements, the event triggers:
# -On the innermost element first (target element).
# -Then bubbles up to the outer elements.
# To prevent an event from bubbling up, use event.stopPropagation():
# useful in specific scenarios where you don't want parent elements to react when a child element is clicked.
# document.getElementById("child").addEventListener("click", function(event) {
#    console.log("Child Button Clicked");
#    event.stopPropagation(); 
# });
# eamaple 1
# 1 Imagine you have a modal dialog with a close button inside it. If you click anywhere inside the modal, it shouldn’t close. However, clicking outside the modal should close it.
# 2. Preventing Multiple Clicks in Nested Lists.
# 3. Preventing Unwanted Form Submissions






# 12. Explain event capturing (trickling) and how it differs from bubbling?
# Event capturing and event bubbling are two phases of event propagation in the DOM. They determine how events travel through the element hierarchy when an event occurs.
# Event capturing is the opposite of event bubbling. Instead of propagating upward , the event propagates downward from the root of the document to the target(child) element.
# How It Works:
# 1.The event starts at the topmost ancestor (document).
# 2.It trickles down through each parent element.
# 3.The event reaches the target element.
# 4.If bubbling is enabled, the event then bubbles back up.
# Since { capture: true } is used, the event handler on parent fires first (before the child handler).
# document.getElementById("parent").addEventListener("click", function() {
#    console.log("Parent Div Clicked - Capturing Phase");
# }, true); 
# When to Use Event Capturing?
# ✅ When you want parent elements to handle an event before children.
# ✅ When dealing with third-party libraries that rely on capturing.
# ✅ When preventing unwanted bubbling effects.





# 13. If an event handler calls stopPropagation(), will other handlers on the same element execute?