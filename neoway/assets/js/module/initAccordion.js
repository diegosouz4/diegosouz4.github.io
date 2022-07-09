export default function InitAccordion(){var e=document.querySelector("[data-accordion]");e&&(openAccordion(document.querySelector(".btn--accordion")),e.addEventListener("click",handleClick))}function handleClick(e){e.target.classList.contains("open")?resetAccordion():(resetAccordion(),e.target.classList.add("open"),e.target.parentNode.nextElementSibling.classList.add("open"))}function openAccordion(e){e.classList.add("open"),e.parentNode.nextElementSibling.classList.add("open")}function resetAccordion(){var e=document.querySelectorAll(".btn--accordion"),n=document.querySelectorAll(".accordion__content");(e||n)&&(e.forEach((function(e){return e.classList.remove("open")})),n.forEach((function(e){return e.classList.remove("open")})))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9pbml0QWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbIkluaXRBY2NvcmRpb24iLCJhY2NvcmRpb25MaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3BlbkFjY29yZGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXNldEFjY29yZGlvbiIsImFkZCIsInBhcmVudE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJlbCIsImFjY29yZGlvbkJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9uQ29udGVudHMiLCJmb3JFYWNoIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiZUFBZSxTQUFTQSxnQkFDdEIsSUFBTUMsRUFBZ0JDLFNBQVNDLGNBQWMsb0JBQ3hDRixJQUdMRyxjQURzQkYsU0FBU0MsY0FBYyxvQkFHN0NGLEVBQWNJLGlCQUFpQixRQUFTQyxjQUcxQyxTQUFTQSxZQUFZQyxHQUNmQSxFQUFNQyxPQUFPQyxVQUFVQyxTQUFTLFFBQ2xDQyxrQkFJRkEsaUJBQ0FKLEVBQU1DLE9BQU9DLFVBQVVHLElBQUksUUFDRkwsRUFBTUMsT0FBT0ssV0FBV0MsbUJBQ2hDTCxVQUFVRyxJQUFJLFNBSWpDLFNBQVNSLGNBQWNXLEdBQ3JCQSxFQUFHTixVQUFVRyxJQUFJLFFBQ1FHLEVBQUdGLFdBQVdDLG1CQUN0QkwsVUFBVUcsSUFBSSxRQUlqQyxTQUFTRCxpQkFDUCxJQUFNSyxFQUFnQmQsU0FBU2UsaUJBQWlCLG1CQUMxQ0MsRUFBb0JoQixTQUFTZSxpQkFBaUIsd0JBQy9DRCxHQUFrQkUsS0FFdkJGLEVBQWNHLFNBQVEsU0FBQ0osR0FBRCxPQUFRQSxFQUFHTixVQUFVVyxPQUFPLFdBQ2xERixFQUFrQkMsU0FBUSxTQUFDSixHQUFELE9BQVFBLEVBQUdOLFVBQVVXLE9BQU8iLCJmaWxlIjoibW9kdWxlL2luaXRBY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbml0QWNjb3JkaW9uKCkge1xyXG4gIGNvbnN0IGFjY29yZGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWNjb3JkaW9uXVwiKTtcclxuICBpZiAoIWFjY29yZGlvbkxpc3QpIHJldHVybjtcclxuXHJcbiAgY29uc3QgYWNjb3JkaW9uQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1hY2NvcmRpb25cIik7XHJcbiAgb3BlbkFjY29yZGlvbihhY2NvcmRpb25CdG5zKTtcclxuXHJcbiAgYWNjb3JkaW9uTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xyXG4gICAgcmVzZXRBY2NvcmRpb24oKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlc2V0QWNjb3JkaW9uKCk7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gIGNvbnN0IGFjY29yZGlvbkNvbnRlbnQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgYWNjb3JkaW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxufVxyXG5cclxuLy9GdW7Dp8OjbyBwYXJhIG8gYWNjb3JkaW9uIHNlbGVjaW9uYWRvLlxyXG5mdW5jdGlvbiBvcGVuQWNjb3JkaW9uKGVsKSB7XHJcbiAgZWwuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgY29uc3QgYWNjb3JkaW9uQ29udGVudCA9IGVsLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gIGFjY29yZGlvbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbn1cclxuXHJcbi8vRnVuw6fDo28gcGFyYSBmZWNoYXIgb3MgYWNjb3JkaW9ucy5cclxuZnVuY3Rpb24gcmVzZXRBY2NvcmRpb24oKSB7XHJcbiAgY29uc3QgYWNjb3JkaW9uQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLS1hY2NvcmRpb25cIik7XHJcbiAgY29uc3QgYWNjb3JkaW9uQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbl9fY29udGVudFwiKTtcclxuICBpZiAoIWFjY29yZGlvbkJ0bnMgJiYgIWFjY29yZGlvbkNvbnRlbnRzKSByZXR1cm47XHJcblxyXG4gIGFjY29yZGlvbkJ0bnMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpKTtcclxuICBhY2NvcmRpb25Db250ZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIikpO1xyXG59XHJcbiJdfQ==
