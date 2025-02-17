
# S21. What is the primary difference between preventDefault() and return false?

# The key difference is that:
# 1.event.preventDefault(): Only prevents the default browser behavior (e.g., stopping form submission, preventing a link from navigating).
# 2.default action and event propagation.


# 22. If an event handler uses preventDefault(), will the event still bubble up the DOM tree?
# Yes, an event will still bubble up the DOM tree even if preventDefault() is called.
# What preventDefault() Does
# It prevents the default browser action associated with an event (e.g., stopping a link from navigating, preventing form submission).
# It does NOT stop event propagation (bubbling or capturing).
# If you also want to prevent the event from bubbling up, use stopPropagation():





# 23. In what situations would return false be ignored when handling events?
# The effect of return false depends on the context and the framework being used. In some cases, it does nothing or gets ignored.
# In pure JavaScript, return false does not stop event propagation or prevent the default action.
# Unlike in jQuery, return false in vanilla JS has no special effect.
# Ignored in Arrow Functions
# Ignored in Asynchronous Code




# 24. How do browsers behave differently when calling preventDefault() on form submission events?
# Calling event.preventDefault() on a form submission event generally prevents the form from being submitted to the server, but browser behavior can vary depending on factors such as form methods, input types, and browser implementations.
# 1. Standard Behavior Across Browsers
# -In most cases, calling event.preventDefault() inside a "submit" event listener stops the form from being submitted.
#
#
#




# 25. What happens if you call preventDefault() on a keydown event for the "Enter" key inside a form input?
# Calling event.preventDefault() inside a keydown event handler for the "Enter" key inside a form input prevents the default behavior of the Enter key, which is typically submitting the form. However, behavior may vary across browsers and input types.
# 1. Expected Behavior in Most Browsers
# If event.preventDefault() is used inside a "keydown" event for Enter, the form won't submit when the user presses Enter inside an input field.
# The input field will still accept text input as usual.
# submit, keydown, search,textarae :working and correct aprroach find out event event.key === "Enter" and handle the conditions




# 26. Can preventDefault() stop an anchor <a> tag from navigating if its href is a JavaScript function?
# Yes, preventDefault() can prevent the default behavior of an anchor (<a>) tag, even if the href is a JavaScript function (e.g., href="javascript:void(0)" or href="javascript:myFunction()").
# 1. How It Works:
# When an anchor tag has a href attribute that points to a JavaScript function (either via javascript: syntax or a void(0) call), the default behavior is to execute that JavaScript when the anchor is clicked. However, calling event.preventDefault() in an event handler for the anchor prevents that JavaScript from being executed.







# 27. What happens when calling preventDefault() on a touch event on mobile devices?
# Calling event.preventDefault() on a touch event (such as touchstart, touchmove, touchend) on mobile devices has different effects depending on the event type and the context. Generally, it prevents the default action associated with the touch event, but the precise behavior varies based on factors like scrolling, gestures, and the browser.

# When you call preventDefault() on touch events, you are preventing the default behavior that is associated with those events. For mobile devices, this can mean a variety of behaviors being blocked, depending on which touch event you're interacting with.

# Common Effects of preventDefault() on Touch Events:
# 1.touchstart: Prevents the start of a touch interaction, like triggering a "tap" event.
# 2.touchmove: Prevents the default scrolling behavior (e.g., page or element scroll).
# 3.touchend: Prevents the event from completing its default action, such as triggering a click or finishing a swipe action.

