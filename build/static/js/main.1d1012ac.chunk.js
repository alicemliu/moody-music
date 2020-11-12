(this["webpackJsonpmoody-music"]=this["webpackJsonpmoody-music"]||[]).push([[0],{225:function(t,e,s){},226:function(t,e,s){"use strict";s.r(e);var n=s(1),o=s(0),i=s.n(o),c=s(90),r=s.n(c),a=(s(24),s(5)),l=s(7),h=s(8),u=s(10),d=s(9),b=(s(62),function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){return Object(l.a)(this,s),e.call(this,t)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("div",{class:"title",children:"about"}),Object(n.jsxs)("div",{class:"body-text",children:["Moody Music is a web app that uses color to generate a personalized playlist based on your Spotify listening history.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Created by ",Object(n.jsx)("a",{href:"https://alicemliu.github.io",children:"Alice Liu"}),". The source code can be found ",Object(n.jsx)("a",{href:"https://github.com/alicemliu/moody-music",children:"here"}),"."]}),Object(n.jsx)("div",{class:"subtitle",children:"technology"}),Object(n.jsxs)("div",{class:"body-text",children:["Moody Music is build with ",Object(n.jsx)("a",{href:"https://create-react-app.dev/",children:"create-react-app"})," and ",Object(n.jsx)("a",{href:"https://developer.spotify.com/documentation/web-api/",children:"Spotify's Web API"}),". It runs completely client-side and is deployed on Heroku.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Although I used Spotify's API, I'm not affiliated with Spotify."]}),Object(n.jsx)("div",{class:"subtitle",children:"privacy"}),Object(n.jsxs)("div",{class:"body-text",children:["Spotify authorization is handled using ",Object(n.jsx)("a",{href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow",children:"implicit grant flow"}),", meaning that all account authorization happens in your browser and no account data is being stored by Moody Music. Because of this, tokens expire after an hour, which is why you might be promoted to log in again after periods of inactivity."]}),Object(n.jsxs)("div",{class:"icons",children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/alicemliu/",children:Object(n.jsx)("i",{class:"fa fa-linkedin-square"})}),Object(n.jsx)("a",{href:"https://www.github.com/alicemliu/",children:Object(n.jsx)("i",{class:"fa fa-github"})}),Object(n.jsx)("a",{href:"https://twitter.com/alicemliu",children:Object(n.jsx)("i",{class:"fa fa-twitter-square"})})]})]})}}]),s}(i.a.Component)),j=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={token:""},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=window.location.hash.substring(1).split("&").reduce((function(t,e){if(e){var s=e.split("=");t[s[0]]=decodeURIComponent(s[1])}return t}),{});window.location.hash="";t.access_token||(window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("3c6967b4c5d84ba9bb81d27d7d2f3f2f","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-top-read","playlist-modify-private","playlist-modify-public"].join("%20"),"&response_type=token&show_dialog=true"))}},{key:"render",value:function(){return Object(n.jsx)("div",{class:"content",children:Object(n.jsx)("span",{class:"subtitle",children:"Authorizing..."})})}}]),s}(i.a.Component),p=s(11),f=s(91),O=s.n(f),y=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={token:"",loggedIn:!1,message:"Log in with Spotify to get started!"},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=O.a.parse(window.location.hash);console.log("hello");var e=t.access_token;e?this.setState((function(t){return{token:e,loggedIn:!0,message:"Authentication successful."}})):this.setState((function(t){return{token:e,loggedIn:!1,message:""}}))}},{key:"render",value:function(){var t=this.state.loggedIn;return Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("span",{class:"title",children:"moody music \ud83c\udfb6"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"body-text",children:["A colorful, personalized playlist generator.",Object(n.jsx)("br",{})]}),t?Object(n.jsx)(a.a,{to:{pathname:"/color",state:{token:this.state.token}}}):Object(n.jsx)(p.b,{to:"/login",children:Object(n.jsx)("button",{class:"round_btn",children:"Login with Spotify"})})]})}}]),s}(i.a.Component),x=s(20),m=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(l.a)(this,s),"undefined"===typeof(n=e.call(this,t)).props.location.state?(n.props.history.push("/error"),n.state={token:"",moodOption:"",artists:[],hex:"#ffffff",hsl:{h:0,s:0,l:1},rgb:{r:0,g:0,b:0},artistQuery:"",userId:""}):n.state={token:n.props.location.state.token,moodOption:n.props.location.state.moodOption,hex:n.props.location.state.hex,hsl:n.props.location.state.hsl,rgb:n.props.location.state.rgb,artists:n.props.location.state.artists,artistQuery:n.props.location.state.artistQuery,userId:n.props.location.state.userId},n.getPlaylist=n.getPlaylist.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getPlaylist()}},{key:"getPlaylist",value:function(){var t=this,e="https://api.spotify.com/v1/recommendations?limit=20&seed_artists="+this.state.artistQuery,s="https://api.spotify.com/v1/users/"+this.state.userId+"/playlists",n=this.state.hsl.s,o=this.state.rgb.g/225;fetch(e+"&target_energy="+n+"&target_valence="+o,{method:"GET",headers:{Authorization:"Bearer "+this.state.token}}).then((function(t){if(!t.ok)throw Error(t);return t.json()})).then((function(e){var s="";return e.tracks.map((function(t){s=s+t.uri+","})),t.setState({songs:s}),s})).then((function(e){fetch(s,{method:"POST",headers:{Authorization:"Bearer "+t.state.token},body:JSON.stringify({name:t.state.hex,description:"Playlist created by Moody Music.",public:!1})}).then((function(t){if(!t.ok)throw Error(t);return t.json()})).then((function(e){return t.setState({playlistURI:e.external_urls.spotify,playlistId:e.id}),e.id})).then((function(e){fetch("https://api.spotify.com/v1/playlists/"+e+"/tracks?uris="+t.state.songs,{method:"POST",headers:{Authorization:"Bearer "+t.state.token}}).then((function(t){if(!t.ok)throw Error(t)})).catch((function(e){console.log(e),t.props.history.push("/error")}))})).catch((function(e){console.log(e),t.props.history.push("/error")}))})).catch((function(e){console.log(e),t.props.history.push("/error")}))}},{key:"render",value:function(){var t="https://open.spotify.com/embed/playlist/"+this.state.playlistId;return Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("span",{class:"title",children:"you're feeling: "}),Object(n.jsx)("span",{class:"title-no-color",style:{color:this.state.hex},children:this.state.hex}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)("iframe",{src:t,id:"embed",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"})}),Object(n.jsx)("a",{href:this.state.playlistURI,class:"round_btn",children:"Open in Spotify"})]})}}]),s}(i.a.Component),g=s(97),v=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var n;Object(l.a)(this,s),(n=e.call(this,t)).handleChangeComplete=function(t){n.setState({hex:t.hex,hsl:t.hsl,rgb:t.rgb,isSelected:!0})};var o="";return"undefined"===typeof n.props.location.state?n.props.history.push("/error"):o=n.props.location.state.token,n.state={token:o,hex:"#ffffff",hsl:{h:0,s:0,l:1},rgb:{r:0,g:0,b:0},isSelected:!1},n.getTopArtists=n.getTopArtists.bind(Object(x.a)(n)),n.getUser=n.getUser.bind(Object(x.a)(n)),n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getUser(),this.getTopArtists()}},{key:"getTopArtists",value:function(){var t=this;fetch("https://api.spotify.com/v1/me/top/artists?limit=5",{method:"GET",headers:{Authorization:"Bearer "+this.state.token}}).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(e){var s=[],n="";e.items.map((function(t){s.push(t.name),n=n+t.id+","})),t.setState((function(t){return{artists:s,artistQuery:n}}))})).catch((function(e){console.log(e),t.props.history.push("/error")}))}},{key:"getUser",value:function(){var t=this;fetch("https://api.spotify.com/v1/me",{method:"GET",headers:{Authorization:"Bearer "+this.state.token}}).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(e){t.setState((function(t){return{userId:e.id}}))})).catch((function(e){console.log(e),t.props.history.push("/error")}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("div",{class:"title",children:"what color are you feeling?"}),"The color you pick affects the mood of the generated playlist, along with your listening history.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(g.a,{color:this.state.hex,onChange:this.handleChangeComplete,disableAlpha:!0}),Object(n.jsx)(p.b,{to:{pathname:"/playlist",state:{token:this.state.token,hex:this.state.hex,hsl:this.state.hsl,rgb:this.state.rgb,artists:this.state.artists,artistQuery:this.state.artistQuery,userId:this.state.userId}},children:Object(n.jsx)("button",{className:"round_btn",disabled:!this.state.isSelected,children:"Create Playlist"})})]})}}]),s}(i.a.Component),k=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={redirect:!1},n}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.id=setTimeout((function(){return t.setState({redirect:!0})}),1500)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){return Object(n.jsx)("div",{class:"content",children:this.state.redirect?Object(n.jsx)("div",{children:Object(n.jsx)(a.a,{to:"/login"})}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{class:"subtitle",children:["Authentication timed out!",Object(n.jsx)("br",{}),"Redirecting you to login..."]}),Object(n.jsx)("br",{}),Object(n.jsx)(p.b,{to:"/",children:Object(n.jsx)("button",{class:"round_btn",children:"Return to Homepage"})})]})})}}]),s}(i.a.Component),w=function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(t){return Object(l.a)(this,s),e.call(this,t)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"content",children:[Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"subtitle",children:["Oops! This page doesn't exist.",Object(n.jsx)("br",{})]}),Object(n.jsx)(p.b,{to:"/",children:Object(n.jsx)("button",{class:"round_btn",children:"Return to Homepage"})})]})}}]),s}(i.a.Component),I=function(){return Object(n.jsxs)(a.d,{className:"switch-wrapper",children:[Object(n.jsx)(a.b,{exact:!0,path:"/",component:y}),Object(n.jsx)(a.b,{exact:!0,path:"/about",component:b}),Object(n.jsx)(a.b,{exact:!0,path:"/login",component:j}),Object(n.jsx)(a.b,{exact:!0,path:"/color",component:v}),Object(n.jsx)(a.b,{exact:!0,path:"/playlist",component:m}),Object(n.jsx)(a.b,{exact:!0,path:"/error",component:k}),Object(n.jsx)(a.b,{component:w})]})},S=(s(225),function(t){Object(u.a)(s,t);var e=Object(d.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"header",children:[Object(n.jsx)(p.b,{to:"/",class:"logo",children:"\ud83c\udfb6"}),Object(n.jsxs)("div",{class:"header-right",children:[Object(n.jsx)(p.b,{to:"/about",children:"about"}),Object(n.jsx)(p.b,{to:"/login",children:"login"})]})]})}}]),s}(i.a.Component));var C=function(){return Object(n.jsxs)(p.a,{children:[Object(n.jsx)(S,{}),Object(n.jsx)(I,{})]})},A=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,228)).then((function(e){var s=e.getCLS,n=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),n(t),o(t),i(t),c(t)}))};r.a.render(Object(n.jsx)(C,{}),document.getElementById("root")),A()},24:function(t,e,s){},62:function(t,e,s){}},[[226,1,2]]]);
//# sourceMappingURL=main.1d1012ac.chunk.js.map