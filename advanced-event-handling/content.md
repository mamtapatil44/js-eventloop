 # 31. Why should you use addEventListener instead of onclick for handling events?
 # 1. addEventListener allows multiple event handlers for the same event on an element, whereas onclick overwrites any previously assigned handler. 
 # 2. addEventListener allows cleaner code by keeping JavaScript separate from HTML.
 # 3. Avoids inline event attributes (<button onclick="handleClick()">Click</button>), which are harder to maintain.
 # 4. addEventListener provides control over event propagation with the useCapture parameter (true for capture phase, false for bubble phase).
 # 5. addEventListener allows removing a specific event handler with removeEventListener, while onclick cannot selectively remove handlers.
 # 6. addEventListener supports additional event options (e.g., passive, once), which improve performance and usability.












 # 32.32. How can you ensure an event listener only fires once per element without manually removing it?
 # 1.To ensure that an event listener executes only once for a given element without manually removing it, you can use the { once: true } option when adding the event listener with addEventListener().
 # The { once: true } option ensures that the event listener automatically removes itself after executing once.
 # document.getElementById("myButton").addEventListener("click", function() {
 #  console.log("Button clicked! This will only log once.");
# }, { once: true });

# 2.Using removeEventListener() Manually
# event.target.removeEventListener("click", handleClick);







# 33. How do event listeners behave when dynamically inserting elements into the DOM?
# When dynamically inserting elements into the DOM, event listeners behave differently depending on how and where they are added.
# 1.If you add an event listener before inserting an element into the DOM, the listener will still work once the element is inserted
#          const newButton = document.createElement("button");
#           newButton.textContent = "Click Me";

 #           newButton.addEventListener("click", () => {
 #            console.log("Button clicked!");
#           });
#             document.body.appendChild(newButton);

# 2.If you insert a new element dynamically after the DOM has loaded, it does not inherit event listeners that were previously attached to similar elements.
# 3.Using Event Delegation for Dynamically Inserted Elements
# Instead of adding event listeners directly to dynamic elements, you can delegate events to a parent element that exists when the page loads







# 34. How can you determine which element triggered an event when using event delegation?
# # When using event delegation, the event listener is attached to a parent element, and events from child elements bubble up to it. To determine which element actually triggered the event, you use the event.target property.
# The event.target property refers to the exact element that was clicked, even if the listener is attached to a parent
#  2.Filtering Events for Specific Child Elements
# If you only want to respond to specific child elements, use event.target.matches()
# 3.Finding a Specific Parent Using closest()
# If you need to find the closest ancestor matching a selector (e.g., clicking inside a nested element), use event.target.closest()
# 









# 35. How would you prevent a click event on a button inside a link from triggering the link navigation?
# If you have a <button> inside an <a> tag, clicking the button will trigger both the button's action and the link's navigation due to event bubbling. To prevent the link navigation when clicking the button, you can use event.stopPropagation() or event.preventDefault(), depending on your needs.
# stopPropagation() stops the event from reaching the parent <a>, preventing unintended navigation.
# If you never want the <a> tag to navigate when clicking the button, you can call preventDefault() instead.







# 36. Can stopPropagation() affect asynchronous event handling like setTimeout()?
# No, stopPropagation() does not affect asynchronous event handling, such as setTimeout(), setInterval(), or Promise callbacks.
# Why?
# stopPropagation() only affects event propagation (bubbling or capturing) within the current event cycle.
# setTimeout() schedules a function to execute after the event cycle completes, so stopPropagation() has no influence on it.









# 38. What happens if you attach an event listener to the document for an event that was stopPropagation() earlier in the bubbling phase?
