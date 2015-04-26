function startList() {
	if (document.all&&document.getElementById) {
		navMenuElements = document.getElementById("leftHandNavigation").getElementsByTagName("li");
		for (i = 0; i < navMenuElements.length; i++) {
			navMenuElements[i].onmouseover=function(){
				this.className=this.className.replace(" nl2-boff", " nl2-boff-over");
				this.className=this.className.replace(" nl1-boff-closed", " nl1-boff-closed-over");
				this.className=this.className.replace(" nl1-boff-none", " nl1-boff-none-over");
			}
			navMenuElements[i].onmouseout=function() {
				this.className=this.className.replace(" nl2-boff-over", " nl2-boff");
				this.className=this.className.replace(" nl1-boff-closed-over", " nl1-boff-closed");
				this.className=this.className.replace(" nl1-boff-none-over", " nl1-boff-none");
			}
		}
	}
}
