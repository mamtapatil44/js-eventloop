
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