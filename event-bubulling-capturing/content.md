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
# Yes, other event handlers on the same element will still execute, even if event.stopPropagation() is called.
# Why?
# stopPropagation() only prevents the event from moving to parent elements (stopping bubbling or capturing).
# It does not stop other event listeners attached to the same element from running.
# If you want to prevent all event handlers on the same element from executing, use event.stopImmediatePropagation() instead of stopPropagation():





# 14. What is event delegation, and how does it help optimize event handling?
# Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple event listeners to child elements.
# How Event Delegation Works
# 1.Attach an event listener to a parent element instead of individual child elements.
# 2.When an event occurs on a child element, it bubbles up to the parent.
# 3.Use event.target to determine which child element triggered the event and handle it accordingly.
# Why Use Event Delegation?
# ✅ Improves Performance – Reduces the number of event listeners, which is crucial when working with many dynamically added elements.
# ✅ Handles Dynamically Added Elements – Works even if child elements are added after the page loads.
# ✅ Simplifies Code – Eliminates the need to attach and remove multiple event listeners.






# 15. How can you allow bubbling for some elements but not others within the same event listener?
# ✅ Use event.stopPropagation() conditionally to prevent bubbling only for specific elements.
# ✅ Check event.target to determine which element was clicked.
# ✅ Allows finer control over event bubbling within the same event listener.
#






# 16. If stopPropagation() is used inside a capturing-phase event handler, what will happen?
# If stopPropagation() is used inside a capturing-phase event handler, it will prevent the event from propagating to the next event listener in both the capturing and bubbling phases.




# 17. In which scenarios should you use stopImmediatePropagation() instead of stopPropagation()?
# You should use stopImmediatePropagation() instead of stopPropagation() in scenarios where you need to completely halt the event from reaching any other event listeners on the same element, in addition to stopping propagation to parent elements






# 18. Can stopPropagation() prevent a synthetic React event from bubbling? Why or why not?
