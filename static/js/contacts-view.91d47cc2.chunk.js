(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{144:function(t,e,n){t.exports={wrapper:"Viewstyles_wrapper__9Z6jN",title:"Viewstyles_title__g-CvR",info:"Viewstyles_info__1lbaW",contactListItem:"Viewstyles_contactListItem__2Trli",contact:"Viewstyles_contact__3ZGrB",buttonDelete:"Viewstyles_buttonDelete__dRTKK",form:"Viewstyles_form__2ZW1T",textField:"Viewstyles_textField__a-BeE"}},148:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__UiPd8",buttonDelete:"contactListItem_buttonDelete__2ASLW",list:"contactListItem_list__1xbdU"}},153:function(t,e,n){t.exports={phonebook:"ContactForm_phonebook__jvbJy",form:"ContactForm_form__1oLmW",formLabel:"ContactForm_formLabel__36qbW",formInput:"ContactForm_formInput__2HMy_",buttonSubmit:"ContactForm_buttonSubmit__3gaD2"}},154:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__3WpLp",filterInput:"filter_filterInput__1aMve"}},176:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return A}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return l})),n.d(c,"addContact",(function(){return b})),n.d(c,"deleteContact",(function(){return f}));var a={};n.r(a),n.d(a,"getContacts",(function(){return m})),n.d(a,"getLoading",(function(){return j})),n.d(a,"getError",(function(){return _})),n.d(a,"getFilter",(function(){return O})),n.d(a,"getVisibleContacts",(function(){return h}));var r=n(0),o=n(10),i=n(28),s=n.n(i),u=n(9),l=function(){return function(t){t(Object(u.fetchContactsRequest)()),s.a.get("/contacts").then((function(e){var n=e.data;return t(Object(u.fetchContactsSuccess)(n))})).catch((function(e){t(Object(u.fetchContactsError)(e))}))}},b=function(t,e){return function(n){var c={name:t,number:e};n(Object(u.addContactRequest)()),s.a.post("/contacts",c).then((function(t){var e=t.data;return n(Object(u.addContactSuccess)(e))})).catch((function(t){n(Object(u.addContactError)(t))}))}},f=function(t){return function(e){e(Object(u.deleteContactRequest)()),s.a.delete("/contacts/".concat(t)).then((function(){return e(Object(u.deleteContactSuccess)(t))})).catch((function(t){e(Object(u.deleteContactError)(t))}))}},d=n(40),m=function(t){return t.contacts.items},j=function(t){return t.contacts.isLoading},_=function(t){return t.contacts.error},O=function(t){return t.contacts.filter},h=Object(d.a)([m,O],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),p=n(142),C=n(148),x=n.n(C),v=n(3),g=function(t){var e=t.name,n=t.number,c=t.id,a=t.onDelete;return Object(v.jsxs)("li",{className:x.a.contactListItem,children:[Object(v.jsxs)("p",{className:x.a.contact,children:[e,": ",n," "]}),Object(v.jsx)(p.a,{className:x.a.buttonDelete,color:"primary",variant:"contained",type:"button",onClick:function(){return a(c)},children:"Delete"})]})};var L=function(){var t=Object(o.b)(),e=Object(o.c)(a.getVisibleContacts);return Object(r.useEffect)((function(){return t(c.fetchContacts())}),[t]),Object(v.jsx)("ul",{className:x.a.list,children:e.map((function(e){var n=e.name,a=e.number,r=e.id;return Object(v.jsx)(g,{id:r,name:n,number:a,onDelete:function(){return function(e){return t(c.deleteContact(e))}(r)}},r)}))})},w=n(49),y=n(50),N=n(153),I=n.n(N);var F=function(){var t=Object(o.c)(a.getContacts),e=Object(o.b)(),n=Object(o.c)(a.getLoading),i=Object(r.useState)(""),s=Object(w.a)(i,2),u=s[0],l=s[1],b=Object(r.useState)(""),f=Object(w.a)(b,2),d=f[0],m=f[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":l(c);break;case"number":m(c);break;default:return}},_=function(){l(""),m("")};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:I.a.form,onSubmit:function(n){if(n.preventDefault(),function(e){return t.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(u))return alert(" ".concat(u," is already in the phonebook.")),void _();e(c.addContact(u,d)),_()},children:[Object(v.jsxs)("label",{className:I.a.formLabel,children:["Name",Object(v.jsx)("input",{className:I.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:u,onChange:j})]}),Object(v.jsxs)("label",{className:I.a.formLabel,children:["Number",Object(v.jsx)("input",{className:I.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,onChange:j})]}),!n&&Object(v.jsx)(p.a,{className:I.a.buttonSubmit,type:"submit",color:"primary",variant:"contained",children:"Add contact"}),n&&Object(v.jsx)(y.a,{})]})})},k=n(154),D=n.n(k);var S=function(){var t=Object(o.b)(),e=Object(o.c)(a.getFilter),n=Object(o.c)(a.getContacts),c=Object(o.c)(a.getError);return Object(v.jsx)(v.Fragment,{children:n.length>0&&!c&&Object(v.jsxs)("label",{className:D.a.filterLabel,children:["Find contacts by name",Object(v.jsx)("input",{className:D.a.filterInput,type:"text",value:e,onChange:function(e){return t(u.changeFilter(e.target.value))}})]})})},V=n(144),E=n.n(V);function A(){var t=Object(o.b)();return Object(r.useEffect)((function(){return t(c.fetchContacts())}),[t]),Object(v.jsxs)("div",{className:E.a.wrapper,children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(F,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(S,{}),Object(v.jsx)(L,{})]})}}}]);
//# sourceMappingURL=contacts-view.91d47cc2.chunk.js.map