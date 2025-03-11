function activateaboutblank()
var urlobj = new window.URL(window.location.href);
        let url = prompt("url?")
        if (url) {
            var win;
            document.querySelector('.open'). onclick = function() {
            if (win) {
            win.focus();
        }
        else {
            win = window.open();
            win.document.body.style.margin = '0';
            win. document.body.style.height = '100%';
            var iframe = win.document.createElement('iframe');
            iframe.style.border='none';
            iframe.style.width = '100%' ;
            iframe.style.height = '100%' ;
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
            }
            location.reload();
            }
        }
