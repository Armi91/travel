!function(a,b,c){function d(b,c){this.element=b,this.settings=a.extend({},e,c),this.settings.duplicate||c.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=e,this._name=f,this.init()}var e={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},f="slicknav",g="slicknav";Keyboard={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38},d.prototype.init=function(){var c,d,e=this,f=a(this.element),h=this.settings;if(h.duplicate?e.mobileNav=f.clone():e.mobileNav=f,h.removeIds&&(e.mobileNav.removeAttr("id"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("id")})),h.removeClasses&&(e.mobileNav.removeAttr("class"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("class")})),h.removeStyles&&(e.mobileNav.removeAttr("style"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("style")})),c=g+"_icon",""===h.label&&(c+=" "+g+"_no-text"),"a"==h.parentTag&&(h.parentTag='a href="#"'),e.mobileNav.attr("class",g+"_nav"),d=a('<div class="'+g+'_menu"></div>'),""!==h.brand){var i=a('<div class="'+g+'_brand">'+h.brand+"</div>");a(d).append(i)}e.btn=a(["<"+h.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+g+"_btn "+g+'_collapsed">','<span class="'+g+'_menutxt">'+h.label+"</span>",'<span class="'+c+'">','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>',"</span>","</"+h.parentTag+">"].join("")),a(d).append(e.btn),""!==h.appendTo?a(h.appendTo).append(d):a(h.prependTo).prepend(d),d.append(e.mobileNav);var j=e.mobileNav.find("li");a(j).each(function(){var b=a(this),c={};if(c.children=b.children("ul").attr("role","menu"),b.data("menu",c),c.children.length>0){var d=b.contents(),f=!1,i=[];a(d).each(function(){return!a(this).is("ul")&&(i.push(this),void(a(this).is("a")&&(f=!0)))});var j=a("<"+h.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+g+'_item"/>');if(h.allowParentLinks&&!h.nestedParentLinks&&f)a(i).wrapAll('<span class="'+g+"_parent-link "+g+'_row"/>').parent();else{var k=a(i).wrapAll(j).parent();k.addClass(g+"_row")}h.showChildren?b.addClass(g+"_open"):b.addClass(g+"_collapsed"),b.addClass(g+"_parent");var l=a('<span class="'+g+'_arrow">'+(h.showChildren?h.openedSymbol:h.closedSymbol)+"</span>");h.allowParentLinks&&!h.nestedParentLinks&&f&&(l=l.wrap(j).parent()),a(i).last().after(l)}else 0===b.children().length&&b.addClass(g+"_txtnode");b.children("a").attr("role","menuitem").click(function(b){h.closeOnClick&&!a(b.target).parent().closest("li").hasClass(g+"_parent")&&a(e.btn).click()}),h.closeOnClick&&h.allowParentLinks&&(b.children("a").children("a").click(function(b){a(e.btn).click()}),b.find("."+g+"_parent-link a:not(."+g+"_item)").click(function(b){a(e.btn).click()}))}),a(j).each(function(){var b=a(this).data("menu");h.showChildren||e._visibilityToggle(b.children,null,!1,null,!0)}),e._visibilityToggle(e.mobileNav,null,!1,"init",!0),e.mobileNav.attr("role","menu"),a(b).mousedown(function(){e._outlines(!1)}),a(b).keyup(function(){e._outlines(!0)}),a(e.btn).click(function(a){a.preventDefault(),e._menuToggle()}),e.mobileNav.on("click","."+g+"_item",function(b){b.preventDefault(),e._itemClick(a(this))}),a(e.btn).keydown(function(b){var c=b||event;switch(c.keyCode){case Keyboard.ENTER:case Keyboard.SPACE:case Keyboard.DOWN:b.preventDefault(),c.keyCode===Keyboard.DOWN&&a(e.btn).hasClass(g+"_open")||e._menuToggle(),a(e.btn).next().find('[role="menuitem"]').first().focus()}}),e.mobileNav.on("keydown","."+g+"_item",function(b){var c=b||event;switch(c.keyCode){case Keyboard.ENTER:b.preventDefault(),e._itemClick(a(b.target));break;case Keyboard.RIGHT:b.preventDefault(),a(b.target).parent().hasClass(g+"_collapsed")&&e._itemClick(a(b.target)),a(b.target).next().find('[role="menuitem"]').first().focus()}}),e.mobileNav.on("keydown",'[role="menuitem"]',function(b){var c=b||event;switch(c.keyCode){case Keyboard.DOWN:b.preventDefault();var d=a(b.target).parent().parent().children().children('[role="menuitem"]:visible'),f=d.index(b.target),h=f+1;d.length<=h&&(h=0);var i=d.eq(h);i.focus();break;case Keyboard.UP:b.preventDefault();var d=a(b.target).parent().parent().children().children('[role="menuitem"]:visible'),f=d.index(b.target),i=d.eq(f-1);i.focus();break;case Keyboard.LEFT:if(b.preventDefault(),a(b.target).parent().parent().parent().hasClass(g+"_open")){var j=a(b.target).parent().parent().prev();j.focus(),e._itemClick(j)}else a(b.target).parent().parent().hasClass(g+"_nav")&&(e._menuToggle(),a(e.btn).focus());break;case Keyboard.ESCAPE:b.preventDefault(),e._menuToggle(),a(e.btn).focus()}}),h.allowParentLinks&&h.nestedParentLinks&&a("."+g+"_item a").click(function(a){a.stopImmediatePropagation()})},d.prototype._menuToggle=function(a){var b=this,c=b.btn,d=b.mobileNav;c.hasClass(g+"_collapsed")?(c.removeClass(g+"_collapsed"),c.addClass(g+"_open")):(c.removeClass(g+"_open"),c.addClass(g+"_collapsed")),c.addClass(g+"_animating"),b._visibilityToggle(d,c.parent(),!0,c)},d.prototype._itemClick=function(a){var b=this,c=b.settings,d=a.data("menu");d||(d={},d.arrow=a.children("."+g+"_arrow"),d.ul=a.next("ul"),d.parent=a.parent(),d.parent.hasClass(g+"_parent-link")&&(d.parent=a.parent().parent(),d.ul=a.parent().next("ul")),a.data("menu",d)),d.parent.hasClass(g+"_collapsed")?(d.arrow.html(c.openedSymbol),d.parent.removeClass(g+"_collapsed"),d.parent.addClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a)):(d.arrow.html(c.closedSymbol),d.parent.addClass(g+"_collapsed"),d.parent.removeClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a))},d.prototype._visibilityToggle=function(b,c,d,e,f){function h(b,c){a(b).removeClass(g+"_animating"),a(c).removeClass(g+"_animating"),f||k.afterOpen(b)}function i(c,d){b.attr("aria-hidden","true"),l.attr("tabindex","-1"),j._setVisAttr(b,!0),b.hide(),a(c).removeClass(g+"_animating"),a(d).removeClass(g+"_animating"),f?"init"==c&&k.init():k.afterClose(c)}var j=this,k=j.settings,l=j._getActionItems(b),m=0;d&&(m=k.duration),b.hasClass(g+"_hidden")?(b.removeClass(g+"_hidden"),f||k.beforeOpen(e),"jquery"===k.animations?b.stop(!0,!0).slideDown(m,k.easingOpen,function(){h(e,c)}):"velocity"===k.animations&&b.velocity("finish").velocity("slideDown",{duration:k.duration,easing:k.easingOpen,complete:function(){h(e,c)}}),b.attr("aria-hidden","false"),l.attr("tabindex","0"),j._setVisAttr(b,!1)):(b.addClass(g+"_hidden"),f||k.beforeClose(e),"jquery"===k.animations?b.stop(!0,!0).slideUp(m,this.settings.easingClose,function(){i(e,c)}):"velocity"===k.animations&&b.velocity("finish").velocity("slideUp",{duration:k.duration,easing:k.easingClose,complete:function(){i(e,c)}}))},d.prototype._setVisAttr=function(b,c){var d=this,e=b.children("li").children("ul").not("."+g+"_hidden");c?e.each(function(){var b=a(this);b.attr("aria-hidden","true");var e=d._getActionItems(b);e.attr("tabindex","-1"),d._setVisAttr(b,c)}):e.each(function(){var b=a(this);b.attr("aria-hidden","false");var e=d._getActionItems(b);e.attr("tabindex","0"),d._setVisAttr(b,c)})},d.prototype._getActionItems=function(a){var b=a.data("menu");if(!b){b={};var c=a.children("li"),d=c.find("a");b.links=d.add(c.find("."+g+"_item")),a.data("menu",b)}return b.links},d.prototype._outlines=function(b){b?a("."+g+"_item, ."+g+"_btn").css("outline",""):a("."+g+"_item, ."+g+"_btn").css("outline","none")},d.prototype.toggle=function(){var a=this;a._menuToggle()},d.prototype.open=function(){var a=this;a.btn.hasClass(g+"_collapsed")&&a._menuToggle()},d.prototype.close=function(){var a=this;a.btn.hasClass(g+"_open")&&a._menuToggle()},a.fn[f]=function(b){var c=arguments;if(void 0===b||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new d(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var e;return this.each(function(){var g=a.data(this,"plugin_"+f);g instanceof d&&"function"==typeof g[b]&&(e=g[b].apply(g,Array.prototype.slice.call(c,1)))}),void 0!==e?e:this}}}(jQuery,document,window),jQuery(document).ready(function(a){a("#menu").slicknav({closeOnClick:!0,brand:'<img src="img/logo.png" alt="">'})});