(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(4759)}])},4759:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var a=s(5893),n=s(7294),l=s(6490),i=s(7066),u=s(1163);let r=(0,l.eI)("https://muckyytxwzfrtlkiydjf.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Y2t5eXR4d3pmcnRsa2l5ZGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NzI3ODEsImV4cCI6MjA0OTE0ODc4MX0.CQU74shD5wWhayd3LsVCRcEeI4rajGqYephPM0Odu_4");function c(e){let{session:t}=e,[s,l]=(0,n.useState)(""),[c,o]=(0,n.useState)(""),d=(0,u.useRouter)();t&&d.push("/");let p=async e=>{e.preventDefault();let{data:t,error:a}=await r.auth.signInWithPassword({email:s,password:c});if(a){alert(a.message);return}let n=t.user.id,l=await i.Z.post("".concat("http://localhost:4000","/api/auth/get-token"),{user_id:n,email:t.user.email}),{token:u,role:o}=l.data;localStorage.setItem("backend_token",u),localStorage.setItem("user_role",o),d.push("/")};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,a.jsxs)("form",{onSubmit:p,className:"bg-white p-6 rounded shadow-md space-y-4",children:[(0,a.jsx)("h1",{className:"text-xl font-bold",children:"Login"}),(0,a.jsx)("input",{type:"email",placeholder:"Email",className:"border w-full p-2",value:s,onChange:e=>l(e.target.value)}),(0,a.jsx)("input",{type:"password",placeholder:"Password",className:"border w-full p-2",value:c,onChange:e=>o(e.target.value)}),(0,a.jsx)("button",{className:"bg-blue-600 text-white px-4 py-2 rounded",type:"submit",children:"Login"})]})})}}},function(e){e.O(0,[66,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);