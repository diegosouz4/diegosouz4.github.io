export default function initAnimaScroll(){initAnimate()}function initAnimate(){var n=document.querySelectorAll("[data-anime='container']");n&&0!==n.length&&(animaScroll(n),window.addEventListener("scroll",debounce((function(){animaScroll(n)}),200)))}function animaScroll(n){var i=window.scrollY+3*window.innerHeight/4;n.forEach((function(n){i>n.offsetTop&&n.classList.add("animate")}))}function debounce(n,i,t){var a,e=this;return function(){for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];var c=e,u=function(){a=null,t||n.apply(c,l)},f=t&&!a;clearTimeout(a),a=setTimeout(u,i),f&&n.apply(c,l)}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9pbmlBbmltYVNjcm9sbC5qcyJdLCJuYW1lcyI6WyJpbml0QW5pbWFTY3JvbGwiLCJpbml0QW5pbWF0ZSIsImxpc3RJdGVucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImFuaW1hU2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwiYXJyIiwid2luZG93VG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwiZm9yRWFjaCIsIml0ZW0iLCJvZmZzZXRUb3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJfdGhpcyIsInRoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnRleHQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJlQUFlLFNBQVNBLGtCQUN0QkMsY0FHRixTQUFTQSxjQUNQLElBQU1DLEVBQVlDLFNBQVNDLGlCQUFpQiw0QkFDdkNGLEdBQWtDLElBQXJCQSxFQUFVRyxTQUU1QkMsWUFBWUosR0FFWkssT0FBT0MsaUJBQ0wsU0FDQUMsVUFBUyxXQUNQSCxZQUFZSixLQUNYLE9BSVAsU0FBU0ksWUFBWUksR0FDbkIsSUFDTUMsRUFBWUosT0FBT0ssUUFBZ0MsRUFBckJMLE9BQU9NLFlBQW1CLEVBRTlESCxFQUFJSSxTQUFRLFNBQUNDLEdBQ1BKLEVBQVlJLEVBQUtDLFdBQ25CRCxFQUFLRSxVQUFVQyxJQUxBLGNBV3JCLFNBQVNULFNBQVNVLEVBQU1DLEVBQU1DLEdBQVcsSUFDbkNDLEVBRG1DQyxFQUFBQyxLQUV2QyxPQUFPLFdBQWEsSUFBQSxJQUFBQyxFQUFBQyxVQUFBckIsT0FBVHNCLEVBQVMsSUFBQUMsTUFBQUgsR0FBQUksRUFBQSxFQUFBQSxFQUFBSixFQUFBSSxJQUFURixFQUFTRSxHQUFBSCxVQUFBRyxHQUNsQixJQUFNQyxFQUFVUCxFQUNWUSxFQUFRLFdBQ1pULEVBQVUsS0FDTEQsR0FBV0YsRUFBS2EsTUFBTUYsRUFBU0gsSUFFaENNLEVBQVVaLElBQWNDLEVBQzlCWSxhQUFhWixHQUNiQSxFQUFVYSxXQUFXSixFQUFPWCxHQUN4QmEsR0FBU2QsRUFBS2EsTUFBTUYsRUFBU0giLCJmaWxlIjoibW9kdWxlL2luaUFuaW1hU2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFuaW1hU2Nyb2xsKCkge1xyXG4gIGluaXRBbmltYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRBbmltYXRlKCkge1xyXG4gIGNvbnN0IGxpc3RJdGVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbmltZT0nY29udGFpbmVyJ11cIik7XHJcbiAgaWYgKCFsaXN0SXRlbnMgfHwgbGlzdEl0ZW5zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICBhbmltYVNjcm9sbChsaXN0SXRlbnMpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwic2Nyb2xsXCIsXHJcbiAgICBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIGFuaW1hU2Nyb2xsKGxpc3RJdGVucyk7XHJcbiAgICB9LCAyMDApXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWFTY3JvbGwoYXJyKSB7XHJcbiAgY29uc3QgY2xhc3NBbmltZSA9IFwiYW5pbWF0ZVwiO1xyXG4gIGNvbnN0IHdpbmRvd1RvcCA9IHdpbmRvdy5zY3JvbGxZICsgKHdpbmRvdy5pbm5lckhlaWdodCAqIDMpIC8gNDtcclxuXHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGlmICh3aW5kb3dUb3AgPiBpdGVtLm9mZnNldFRvcCkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NBbmltZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgbGV0IHRpbWVvdXQ7XHJcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xyXG4gICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH07XHJcbn1cclxuIl19
