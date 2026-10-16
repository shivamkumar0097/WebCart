var PRODUCTS = [
  { id:1, name:"Wireless Earbuds", price:2499, oldPrice:3999, emoji:"🎧", cat:"tech", rating:4.3, desc:"Crystal clear sound with long battery life." },
  { id:2, name:"Smart Watch", price:3999, oldPrice:5999, emoji:"⌚", cat:"tech", rating:4.5, desc:"Track fitness, heart rate and notifications." },
  { id:3, name:"Backpack", price:1299, oldPrice:1999, emoji:"🎒", cat:"lifestyle", rating:4.2, desc:"Durable everyday bag with laptop sleeve." },
  { id:4, name:"Sunglasses", price:899, oldPrice:1499, emoji:"🕶️", cat:"lifestyle", rating:4.1, desc:"UV protection with stylish frame." },
  { id:5, name:"Water Bottle", price:499, oldPrice:799, emoji:"💧", cat:"lifestyle", rating:4.4, desc:"Insulated bottle keeps drinks cold/hot." },
  { id:6, name:"Phone Case", price:599, oldPrice:999, emoji:"📱", cat:"tech", rating:4.0, desc:"Shockproof protection for your phone." },
  { id:7, name:"Notebook", price:299, oldPrice:499, emoji:"📓", cat:"lifestyle", rating:4.6, desc:"Premium paper for notes and ideas." },
  { id:8, name:"Power Bank", price:1499, oldPrice:2499, emoji:"🔋", cat:"tech", rating:4.3, desc:"Fast charging 10000mAh portable power." },
  { id:9, name:"Bluetooth Speaker", price:1999, oldPrice:3499, emoji:"🔊", cat:"tech", rating:4.4, desc:"Deep bass portable speaker." },
  { id:10, name:"Laptop Stand", price:799, oldPrice:1299, emoji:"💻", cat:"tech", rating:4.2, desc:"Adjustable aluminum stand." },
  { id:11, name:"Wireless Mouse", price:699, oldPrice:1199, emoji:"🖱️", cat:"tech", rating:4.5, desc:"Ergonomic silent click mouse." },
  { id:12, name:"Keyboard", price:1499, oldPrice:2499, emoji:"⌨️", cat:"tech", rating:4.3, desc:"Mechanical keyboard with RGB." },
  { id:13, name:"Gaming Headset", price:2999, oldPrice:4999, emoji:"🎮", cat:"tech", rating:4.6, desc:"Surround sound gaming headset." },
  { id:14, name:"Tablet", price:12999, oldPrice:17999, emoji:"📟", cat:"tech", rating:4.4, desc:"10 inch display tablet." },
  { id:15, name:"Camera", price:24999, oldPrice:34999, emoji:"📷", cat:"tech", rating:4.7, desc:"24MP mirrorless camera." },
  { id:16, name:"Fitness Band", price:1999, oldPrice:2999, emoji:"💪", cat:"lifestyle", rating:4.3, desc:"Heart rate and step tracker." },
  { id:17, name:"Yoga Mat", price:599, oldPrice:999, emoji:"🧘", cat:"lifestyle", rating:4.5, desc:"Non-slip exercise mat." },
  { id:18, name:"Dumbbells Set", price:1499, oldPrice:2499, emoji:"🏋️", cat:"lifestyle", rating:4.4, desc:"Adjustable weight set." },
  { id:19, name:"Running Shoes", price:2499, oldPrice:3999, emoji:"👟", cat:"lifestyle", rating:4.6, desc:"Lightweight sports shoes." },
  { id:20, name:"T-Shirt", price:499, oldPrice:799, emoji:"👕", cat:"lifestyle", rating:4.2, desc:"Cotton casual t-shirt." },
  { id:21, name:"Jeans", price:999, oldPrice:1599, emoji:"👖", cat:"lifestyle", rating:4.3, desc:"Slim fit denim jeans." },
  { id:22, name:"Cap", price:399, oldPrice:699, emoji:"🧢", cat:"lifestyle", rating:4.1, desc:"Adjustable baseball cap." },
  { id:23, name:"Wallet", price:599, oldPrice:999, emoji:"👛", cat:"lifestyle", rating:4.4, desc:"Leather bifold wallet." },
  { id:24, name:"Perfume", price:1299, oldPrice:1999, emoji:"🧴", cat:"lifestyle", rating:4.5, desc:"Long lasting fragrance." },
  { id:25, name:"Face Cream", price:499, oldPrice:799, emoji:"🧴", cat:"lifestyle", rating:4.3, desc:"Moisturizing face cream." },
  { id:26, name:"Hair Dryer", price:999, oldPrice:1699, emoji:"💨", cat:"lifestyle", rating:4.2, desc:"Professional hair dryer." },
  { id:27, name:"Electric Kettle", price:799, oldPrice:1299, emoji:"☕", cat:"lifestyle", rating:4.6, desc:"1.5L stainless steel kettle." },
  { id:28, name:"Mixer Grinder", price:2499, oldPrice:3999, emoji:"🍳", cat:"lifestyle", rating:4.4, desc:"3 jar mixer grinder." },
  { id:29, name:"Iron", price:899, oldPrice:1499, emoji:"👔", cat:"lifestyle", rating:4.3, desc:"Steam iron for clothes." },
  { id:30, name:"Vacuum Cleaner", price:3999, oldPrice:5999, emoji:"🧹", cat:"lifestyle", rating:4.5, desc:"Cordless vacuum cleaner." },
  { id:31, name:"LED Bulb", price:199, oldPrice:349, emoji:"💡", cat:"tech", rating:4.4, desc:"9W energy saving bulb." },
  { id:32, name:"Extension Board", price:499, oldPrice:799, emoji:"🔌", cat:"tech", rating:4.2, desc:"4 socket with USB." },
  { id:33, name:"USB Cable", price:199, oldPrice:399, emoji:"🔌", cat:"tech", rating:4.1, desc:"Fast charging Type-C cable." },
  { id:34, name:"Memory Card", price:599, oldPrice:999, emoji:"💾", cat:"tech", rating:4.5, desc:"64GB high speed card." },
  { id:35, name:"Pendrive", price:499, oldPrice:799, emoji:"💾", cat:"tech", rating:4.3, desc:"32GB USB 3.0 drive." },
  { id:36, name:"Webcam", price:1999, oldPrice:2999, emoji:"📹", cat:"tech", rating:4.4, desc:"1080p HD webcam." },
  { id:37, name:"Microphone", price:1499, oldPrice:2499, emoji:"🎤", cat:"tech", rating:4.6, desc:"Condenser mic for recording." },
  { id:38, name:"Tripod", price:799, oldPrice:1299, emoji:"📷", cat:"tech", rating:4.3, desc:"Flexible phone tripod." },
  { id:39, name:"Ring Light", price:999, oldPrice:1699, emoji:"💡", cat:"tech", rating:4.5, desc:"LED ring light for videos." },
  { id:40, name:"Books Set", price:599, oldPrice:999, emoji:"📚", cat:"lifestyle", rating:4.7, desc:"5 bestseller books combo." },
  { id:41, name:"Smart TV", price:24999, oldPrice:34999, emoji:"📺", cat:"tech", rating:4.6, desc:"43 inch 4K Smart TV." },
  { id:42, name:"Air Purifier", price:7999, oldPrice:11999, emoji:"🌬️", cat:"lifestyle", rating:4.4, desc:"HEPA filter air purifier." },
  { id:43, name:"Coffee Maker", price:2999, oldPrice:4999, emoji:"☕", cat:"lifestyle", rating:4.5, desc:"Drip coffee machine." },
  { id:44, name:"Toaster", price:1299, oldPrice:1999, emoji:"🍞", cat:"lifestyle", rating:4.3, desc:"2 slice pop-up toaster." },
  { id:45, name:"Blender", price:1799, oldPrice:2799, emoji:"🥤", cat:"lifestyle", rating:4.4, desc:"Portable smoothie blender." },
  { id:46, name:"Fan", price:1999, oldPrice:2999, emoji:"🌀", cat:"lifestyle", rating:4.2, desc:"Table fan with 3 speeds." },
  { id:47, name:"Heater", price:1499, oldPrice:2499, emoji:"🔥", cat:"lifestyle", rating:4.3, desc:"Room heater 2000W." },
  { id:48, name:"Cooler", price:5999, oldPrice:8999, emoji:"❄️", cat:"lifestyle", rating:4.5, desc:"Desert air cooler." },
  { id:49, name:"Router", price:1999, oldPrice:2999, emoji:"📶", cat:"tech", rating:4.4, desc:"Dual band WiFi router." },
  { id:50, name:"Printer", price:6999, oldPrice:9999, emoji:"🖨️", cat:"tech", rating:4.3, desc:"All-in-one inkjet printer." }
];

var TRACK_STEPS = [
  { key: "placed", title: "Order Placed", sub: "We received your order" },
  { key: "packed", title: "Packed at Delhi", sub: "Warehouse: Delhi, India" },
  { key: "shipped", title: "Shipped from Delhi", sub: "On the way to your city" },
  { key: "out", title: "Out for Delivery", sub: "Courier is nearby" },
  { key: "delivered", title: "Delivered", sub: "Package delivered successfully" }
];

var currentCat = 'all';

function getUsers(){ return JSON.parse(localStorage.getItem('gh_users')||'[]'); }
function saveUsers(u){ localStorage.setItem('gh_users', JSON.stringify(u)); }
function getCurrentUser(){ return JSON.parse(localStorage.getItem('gh_current')||'null'); }
function setCurrentUser(u){ localStorage.setItem('gh_current', JSON.stringify(u)); }
function getCart(){ return JSON.parse(localStorage.getItem('gh_cart')||'[]'); }
function saveCart(c){ localStorage.setItem('gh_cart', JSON.stringify(c)); }
function getOrders(){ return JSON.parse(localStorage.getItem('gh_orders')||'[]'); }
function saveOrders(o){ localStorage.setItem('gh_orders', JSON.stringify(o)); }

function showToast(text){
  var t = document.getElementById('toast');
  t.textContent = text;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 1800);
}

function setCategory(cat, btn){
  currentCat = cat;
  var tabs = document.querySelectorAll('.cat-tab');
  for(var i=0; i<tabs.length; i++) tabs[i].classList.remove('active');
  if(btn) btn.classList.add('active');
  renderProducts();
}

function showPage(name){
  var user = getCurrentUser();
  if(!user && (name === 'dashboard' || name === 'profile' || name === 'success' || name === 'track' || name === 'product' || name === 'payment')){
    showPage('login');
    return;
  }
  var pages = ['home','login','signup','dashboard','profile','success','track','product','payment'];
  for(var i=0; i<pages.length; i++){
    var el = document.getElementById('page-'+pages[i]);
    if(el) el.classList.add('hidden');
  }
  var target = document.getElementById('page-'+name);
  if(target) target.classList.remove('hidden');
  updateUI();
  if(name==='home'){ renderProducts(); updateStats(); }
  if(name==='dashboard') renderDashboard();
  if(name==='profile') renderProfile();
  if(name==='product') renderProductPage();
  if(name==='payment') renderPaymentPage();
  var navs = document.querySelectorAll('.nav-item');
  for(var j=0; j<navs.length; j++) navs[j].classList.remove('active');
  if(name==='home'){ var h = document.getElementById('navHome'); if(h) h.classList.add('active'); }
  if(name==='dashboard'){ var d = document.getElementById('navDash'); if(d) d.classList.add('active'); }
  if(name==='profile'){ var pr = document.getElementById('navProfile'); if(pr) pr.classList.add('active'); }
}

function updateUI(){
  var user = getCurrentUser();
  var logged = !!user;
  var dash = document.getElementById('navDash');
  var prof = document.getElementById('navProfile');
  if(dash) dash.style.display = logged ? 'flex' : 'none';
  if(prof) prof.style.display = logged ? 'flex' : 'none';
  updateCartUI();
  if(user && user.address){
    var addr = document.getElementById('checkoutAddress');
    if(addr) addr.value = user.address;
  }
}

function googleAuth(){
  var email = prompt('Enter your Gmail address:');
  if(!email) return;
  email = email.trim().toLowerCase();
  if(!email.endsWith('@gmail.com') || email.indexOf('@') < 1){
    alert('Invalid email. Use Gmail format');
    return;
  }
  var namePart = email.split('@')[0];
  var name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
  var address = prompt('Enter delivery address:') || '';
  var users = getUsers();
  var user = null;
  for(var i=0; i<users.length; i++){
    if(users[i].email === email){ user = users[i]; break; }
  }
  if(!user){
    user = { name: name, email: email, phone: '', address: address, pass: 'google', created: new Date().toLocaleDateString() };
    users.push(user);
    saveUsers(users);
  }
  setCurrentUser(user);
  showToast('Signed in');
  setTimeout(function(){ showPage('home'); }, 400);
}

function signup(){
  var name = document.getElementById('signupName').value.trim();
  var email = document.getElementById('signupEmail').value.trim().toLowerCase();
  var phone = document.getElementById('signupPhone').value.trim();
  var address = document.getElementById('signupAddress').value.trim();
  var pass = document.getElementById('signupPass').value;
  var msg = document.getElementById('signupMsg');
  if(!name || !email || !phone || !address || pass.length < 4){
    msg.className = 'msg error';
    msg.textContent = 'Fill all fields. Password min 4.';
    return;
  }
  if(!email.endsWith('@gmail.com')){
    msg.className = 'msg error';
    msg.textContent = 'Invalid email. Use Gmail';
    return;
  }
  if(phone.length !== 10 || isNaN(phone) || !/^[6-9]/.test(phone)){
    msg.className = 'msg error';
    msg.textContent = 'Wrong mobile number';
    return;
  }
  var users = getUsers();
  for(var i=0; i<users.length; i++){
    if(users[i].email === email){
      msg.className = 'msg error';
      msg.textContent = 'Email already registered.';
      return;
    }
  }
  var user = { name: name, email: email, phone: phone, address: address, pass: pass, created: new Date().toLocaleDateString() };
  users.push(user);
  saveUsers(users);
  setCurrentUser(user);
  msg.className = 'msg success';
  msg.textContent = 'Account created!';
  setTimeout(function(){ showPage('home'); }, 500);
}

function login(){
  var email = document.getElementById('loginEmail').value.trim().toLowerCase();
  var pass = document.getElementById('loginPass').value;
  var msg = document.getElementById('loginMsg');
  if(!email.endsWith('@gmail.com')){
    msg.className = 'msg error';
    msg.textContent = 'Invalid email. Use Gmail';
    return;
  }
  var users = getUsers();
  var user = null;
  for(var i=0; i<users.length; i++){
    if(users[i].email === email && users[i].pass === pass){ user = users[i]; break; }
  }
  if(!user){
    msg.className = 'msg error';
    msg.textContent = 'Wrong email or password.';
    return;
  }
  setCurrentUser(user);
  msg.className = 'msg success';
  msg.textContent = 'Login successful!';
  setTimeout(function(){ showPage('home'); }, 400);
}

function logout(){
  setCurrentUser(null);
  showPage('home');
}

function renderProducts(){
  var q = (document.getElementById('searchBox') && document.getElementById('searchBox').value || '').toLowerCase();
  var list = [];
  for(var i=0; i<PRODUCTS.length; i++){
    var p = PRODUCTS[i];
    var matchQ = p.name.toLowerCase().indexOf(q) !== -1;
    var matchC = currentCat === 'all' || p.cat === currentCat;
    if(matchQ && matchC) list.push(p);
  }
  var grid = document.getElementById('productGrid');
  if(!grid) return;
  if(list.length === 0){
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#878787;padding:40px 0;">No products found</p>';
    return;
  }
  var html = '';
  for(var j=0; j<list.length; j++){
    var item = list[j];
    var discount = Math.round((1 - item.price/item.oldPrice) * 100);
    html += '<div class="product-card">';
    html += '<div class="product-img" onclick="buyProduct(' + item.id + ')">' + item.emoji;
    html += '<div class="rating-badge"><span>★</span> ' + item.rating + '</div></div>';
    html += '<div class="product-info">';
    html += '<div class="product-name">' + item.name + '</div>';
    html += '<div class="price-row">';
    html += '<span class="price">₹' + item.price + '</span>';
    html += '<span class="old-price">₹' + item.oldPrice + '</span>';
    html += '<span class="offer">' + discount + '% off</span>';
    html += '</div>';
    html += '<button class="buy-btn" onclick="buyProduct(' + item.id + ')">Buy • ₹' + item.price + '</button>';
    html += '</div></div>';
  }
  grid.innerHTML = html;
}

function buyProduct(id){
  if(!getCurrentUser()){ showPage('login'); return; }
  var p = null;
  for(var i=0; i<PRODUCTS.length; i++){
    if(PRODUCTS[i].id === id){ p = PRODUCTS[i]; break; }
  }
  if(!p) return;
  window._buyProduct = p;
  showPage('product');
}

function renderProductPage(){
  var p = window._buyProduct;
  if(!p){ showPage('home'); return; }
  var discount = Math.round((1 - p.price/p.oldPrice) * 100);
  var box = document.getElementById('productDetail');
  if(!box) return;
  
  // Similar products (same category, exclude current)
  var similar = [];
  for(var i=0; i<PRODUCTS.length; i++){
    if(PRODUCTS[i].cat === p.cat && PRODUCTS[i].id !== p.id) similar.push(PRODUCTS[i]);
  }
  similar = similar.slice(0, 6);
  
  var similarHtml = '';
  for(var j=0; j<similar.length; j++){
    var s = similar[j];
    var sd = Math.round((1 - s.price/s.oldPrice) * 100);
    similarHtml += '<div class="product-card" style="min-width:140px;" onclick="buyProduct(' + s.id + ')">';
    similarHtml += '<div class="product-img" style="height:100px;font-size:36px;">' + s.emoji + '</div>';
    similarHtml += '<div class="product-info" style="padding:8px;">';
    similarHtml += '<div class="product-name" style="font-size:12px;">' + s.name + '</div>';
    similarHtml += '<div class="price" style="font-size:13px;">₹' + s.price + '</div>';
    similarHtml += '<div class="offer" style="font-size:10px;">' + sd + '% off</div>';
    similarHtml += '</div></div>';
  }
  
  box.innerHTML = 
    '<div style="background:#fff;border-radius:8px;padding:16px;margin-bottom:12px;">' +
    '<div style="text-align:center;font-size:80px;padding:20px 0;background:#fafafa;border-radius:8px;">' + p.emoji + '</div>' +
    '<h2 style="margin:12px 0 6px;">' + p.name + '</h2>' +
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">' +
    '<span style="background:#388e3c;color:#fff;padding:3px 8px;border-radius:4px;font-size:13px;">★ ' + p.rating + '</span>' +
    '<span style="color:#388e3c;font-size:13px;font-weight:500;">' + discount + '% off</span>' +
    '</div>' +
    '<div style="margin-bottom:12px;">' +
    '<span style="font-size:26px;font-weight:600;">₹' + p.price + '</span> ' +
    '<span style="color:#878787;text-decoration:line-through;font-size:14px;">₹' + p.oldPrice + '</span>' +
    '</div>' +
    '<p style="color:#878787;font-size:14px;margin-bottom:16px;">' + p.desc + '</p>' +
    '<button class="btn-primary" onclick="addToCart(' + p.id + ');showPage(\'home\')">Add to Cart</button>' +
    '<button class="btn-primary" style="background:#ffc107;color:#212121;margin-top:8px;" onclick="quickBuy(' + p.id + ')">Buy Now</button>' +
    '</div>' +
    
    '<div style="background:#fff;border-radius:8px;padding:16px;margin-bottom:12px;">' +
    '<h3 style="margin-bottom:12px;font-size:16px;">Delivery Details</h3>' +
    '<div style="background:#f5f5f5;border-radius:6px;padding:12px;margin-bottom:10px;">' +
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span>📍</span><span>Delhi Warehouse</span></div>' +
    '<div style="display:flex;align-items:center;gap:8px;"><span>🚚</span><span>Delivery in 3–5 days</span></div>' +
    '</div>' +
    '<div style="background:#f5f5f5;border-radius:6px;padding:12px;margin-bottom:10px;">' +
    '<div style="display:flex;align-items:center;gap:8px;"><span>🏪</span><span>Seller: GlassHub Store</span></div>' +
    '<div style="font-size:12px;color:#878787;margin-left:28px;">4.5 ★ • Trusted Seller</div>' +
    '</div>' +
    '<div style="display:flex;align-items:center;gap:8px;padding:10px;background:#e8f5e9;border-radius:6px;">' +
    '<span>✅</span><span>1 Year Warranty</span>' +
    '</div>' +
    '</div>' +
    
    '<div style="background:#fff;border-radius:8px;padding:16px;margin-bottom:12px;">' +
    '<div style="display:flex;justify-content:space-around;text-align:center;">' +
    '<div><div style="font-size:24px;">🕐</div><div style="font-size:11px;color:#878787;margin-top:4px;">Cancel<br>within 6 hrs</div></div>' +
    '<div><div style="font-size:24px;">🔄</div><div style="font-size:11px;color:#878787;margin-top:4px;">7-Day<br>Return</div></div>' +
    '<div><div style="font-size:24px;">💳</div><div style="font-size:11px;color:#878787;margin-top:4px;">Secure<br>Payment</div></div>' +
    '</div>' +
    '</div>' +
    
    '<div style="background:#fff;border-radius:8px;padding:16px;">' +
    '<h3 style="margin-bottom:12px;font-size:16px;">Similar Products</h3>' +
    '<div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:8px;">' + similarHtml + '</div>' +
    '</div>';
}

function quickBuy(id){
  if(!getCurrentUser()){ showPage('login'); return; }
  var p = null;
  for(var i=0; i<PRODUCTS.length; i++){
    if(PRODUCTS[i].id === id){ p = PRODUCTS[i]; break; }
  }
  if(!p) return;
  window._directBuy = p;
  showPage('payment');
}

function renderPaymentPage(){
  var p = window._directBuy;
  if(!p){ showPage('home'); return; }
  var box = document.getElementById('payProduct');
  if(box) box.innerHTML = '<div style="display:flex;gap:12px;align-items:center;"><div style="font-size:40px;">' + p.emoji + '</div><div><strong>' + p.name + '</strong><div style="color:#878787;font-size:13px;">Qty: 1</div></div></div>';
  var price = document.getElementById('payPrice');
  var total = document.getElementById('payTotal');
  if(price) price.textContent = '₹' + p.price;
  if(total) total.textContent = '₹' + p.price;
}

function processPayment(){
  var p = window._directBuy;
  if(!p) return;
  var user = getCurrentUser();
  if(!user){ showPage('login'); return; }
  var address = user.address || '';
  if(!address){ alert('Please add address in profile'); return; }
  
  var overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = '<div class="spinner"></div><div class="loading-text">Processing payment...</div>';
  document.body.appendChild(overlay);
  
  setTimeout(function(){
    overlay.remove();
    var orderId = 'GH' + Date.now().toString().slice(-8);
    var orders = getOrders();
    orders.push({
      id: orderId, user: user.email, 
      items: [{ id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 }],
      total: p.price, address: address, shipFrom: 'Delhi', 
      timestamp: Date.now(), date: new Date().toLocaleString()
    });
    saveOrders(orders);
    document.getElementById('successOrderId').textContent = orderId;
    document.getElementById('successTotal').textContent = p.price;
    window._lastOrderId = orderId;
    showPage('success');
  }, 2500);
}

function confirmPayment(){
  var cart = getCart();
  if(cart.length === 0){ alert('Cart is empty'); return; }
  var user = getCurrentUser();
  if(!user){ showPage('login'); return; }
  var address = document.getElementById('checkoutAddress').value.trim() || user.address || '';
  if(!address){ alert('Please enter delivery address'); return; }
  
  var overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = '<div class="spinner"></div><div class="loading-text">Processing payment...</div>';
  document.body.appendChild(overlay);
  
  setTimeout(function(){
    overlay.remove();
    checkout();
  }, 2000);
}

function addToCart(id){
  if(!getCurrentUser()){ showPage('login'); return; }
  var cart = getCart();
  var item = null;
  for(var i=0; i<PRODUCTS.length; i++){
    if(PRODUCTS[i].id === id){ item = PRODUCTS[i]; break; }
  }
  if(!item) return;
  var exist = null;
  for(var j=0; j<cart.length; j++){
    if(cart[j].id === id){ exist = cart[j]; break; }
  }
  if(exist) exist.qty++;
  else cart.push({ id: item.id, name: item.name, price: item.price, emoji: item.emoji, qty: 1 });
  saveCart(cart);
  updateCartUI();
  showToast(item.emoji + ' Added to cart');
}

function removeFromCart(id){
  var cart = getCart();
  var newCart = [];
  for(var i=0; i<cart.length; i++){
    if(cart[i].id !== id) newCart.push(cart[i]);
  }
  saveCart(newCart);
  updateCartUI();
}

function updateCartUI(){
  var cart = getCart();
  var count = 0;
  for(var i=0; i<cart.length; i++) count += cart[i].qty;
  var cc = document.getElementById('cartCount');
  if(cc) cc.textContent = count;
  var box = document.getElementById('cartItems');
  if(!box) return;
  if(cart.length === 0){
    box.innerHTML = '<p style="color:#878787">Cart is empty</p>';
  } else {
    var html = '';
    for(var j=0; j<cart.length; j++){
      var c = cart[j];
      html += '<div class="cart-item"><div>' + c.emoji + ' ' + c.name + ' × ' + c.qty + '</div>';
      html += '<div>₹' + (c.price * c.qty);
      html += ' <button onclick="removeFromCart(' + c.id + ')" style="background:none;border:none;color:#ff6161;cursor:pointer;">✕</button></div></div>';
    }
    box.innerHTML = html;
  }
  var total = 0;
  for(var k=0; k<cart.length; k++) total += cart[k].price * cart[k].qty;
  var totalEl = document.getElementById('cartTotal');
  if(totalEl) totalEl.textContent = total;
}

function toggleCart(){
  if(!getCurrentUser()){ showPage('login'); return; }
  document.getElementById('cartPanel').classList.toggle('open');
  updateCartUI();
}

function getStatusIndex(order){
  var created = order.timestamp || Date.now();
  var hours = (Date.now() - created) / (1000 * 60 * 60);
  if(hours < 0.01) return 0;
  if(hours < 6) return 1;
  if(hours < 24) return 2;
  if(hours < 48) return 3;
  return 4;
}

function checkout(){
  var cart = getCart();
  if(cart.length === 0){ alert('Cart is empty'); return; }
  var user = getCurrentUser();
  if(!user){ showPage('login'); return; }
  var address = document.getElementById('checkoutAddress').value.trim() || user.address || '';
  if(!address){ alert('Please enter delivery address'); return; }
  if(!user.address){
    user.address = address;
    setCurrentUser(user);
    var users = getUsers();
    for(var i=0; i<users.length; i++){
      if(users[i].email === user.email){ users[i].address = address; break; }
    }
    saveUsers(users);
  }
  var total = 0;
  for(var i=0; i<cart.length; i++) total += cart[i].price * cart[i].qty;
  var orderId = 'GH' + Date.now().toString().slice(-8);
  var orders = getOrders();
  orders.push({
    id: orderId, user: user.email, items: cart, total: total,
    address: address, shipFrom: 'Delhi', timestamp: Date.now(),
    date: new Date().toLocaleString()
  });
  saveOrders(orders);
  saveCart([]);
  updateCartUI();
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('successOrderId').textContent = orderId;
  document.getElementById('successTotal').textContent = total;
  window._lastOrderId = orderId;
  showPage('success');
}

function trackLatest(){
  if(window._lastOrderId) trackOrder(window._lastOrderId);
  else showPage('dashboard');
}

function trackOrder(orderId){
  var orders = getOrders();
  var order = null;
  for(var i=0; i<orders.length; i++){
    if(orders[i].id === orderId){ order = orders[i]; break; }
  }
  if(!order){ alert('Order not found'); return; }
  document.getElementById('trackId').textContent = order.id;
  document.getElementById('trackAddress').textContent = order.address || '-';
  var statusIdx = getStatusIndex(order);
  var etaText = statusIdx >= 4 ? 'Delivered' : (statusIdx >= 3 ? '1 day' : (statusIdx >= 2 ? '2–3 days' : '3–5 days'));
  document.getElementById('trackEta').textContent = etaText;
  var html = '';
  for(var s=0; s<TRACK_STEPS.length; s++){
    var cls = 'step';
    if(s < statusIdx) cls += ' done';
    if(s === statusIdx) cls += ' active';
    html += '<div class="' + cls + '"><div class="step-dot"></div>';
    html += '<div class="step-title">' + TRACK_STEPS[s].title + '</div>';
    html += '<div class="step-sub">' + TRACK_STEPS[s].sub + '</div></div>';
  }
  document.getElementById('trackTimeline').innerHTML = html;
  showPage('track');
}

function renderDashboard(){
  var user = getCurrentUser();
  if(!user){ showPage('login'); return; }
  document.getElementById('dashName').textContent = user.name;
  var allOrders = getOrders();
  var orders = [];
  for(var i=0; i<allOrders.length; i++){
    if(allOrders[i].user === user.email) orders.push(allOrders[i]);
  }
  var cart = getCart();
  var cartCount = 0;
  for(var j=0; j<cart.length; j++) cartCount += cart[j].qty;
  document.getElementById('dashOrders').textContent = orders.length;
  document.getElementById('dashCart').textContent = cartCount;
  var spent = 0;
  for(var k=0; k<orders.length; k++) spent += orders[k].total;
  document.getElementById('dashSpent').textContent = '₹' + spent;
  var list = document.getElementById('orderList');
  if(orders.length === 0){
    list.innerHTML = '<p style="color:#878787">No orders yet</p>';
  } else {
    var html = '';
    for(var m = orders.length - 1; m >= 0; m--){
      var o = orders[m];
      var names = '';
      for(var n=0; n<o.items.length; n++){
        if(n > 0) names += ', ';
        names += o.items[n].emoji + ' ' + o.items[n].name;
      }
      html += '<div style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">';
      html += '<strong>₹' + o.total + '</strong> — ' + names;
      html += '<div style="color:#878787;font-size:12px;margin-top:3px;">' + o.id + ' • ' + o.date + '</div>';
      html += '<button style="margin-top:6px;padding:6px 12px;font-size:12px;border:1px solid #2874f0;background:#fff;color:#2874f0;border-radius:4px;cursor:pointer;" onclick="trackOrder(\'' + o.id + '\')">Track</button>';
      html += '</div>';
    }
    list.innerHTML = html;
  }
}

function renderProfile(){
  var user = getCurrentUser();
  if(!user){ showPage('login'); return; }
  document.getElementById('profName').textContent = user.name;
  document.getElementById('profEmail').textContent = user.email;
  document.getElementById('profPhone').textContent = user.phone || '-';
  document.getElementById('profAddress').textContent = user.address || '-';
  document.getElementById('profDate').textContent = user.created || '-';
}

function updateStats(){
  var su = document.getElementById('statUsers');
  var so = document.getElementById('statOrders');
  if(su) su.textContent = getUsers().length;
  if(so) so.textContent = getOrders().length;
}

updateUI();
updateStats();
renderProducts();
if(getCurrentUser()){
  showPage('home');
} else {
  showPage('login');
}