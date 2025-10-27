// @ts-nocheck

const SUPABASE_URL = 'https://zejzrujrspeoszpfbjce.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplanpydWpyc3Blb3N6cGZiamNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDMyNDMsImV4cCI6MjA3NTE3OTI0M30.UAi4jQ0BH1hphW7OEh4JWP4hdVJ4CmvX6x4CyP2ak-U';
const N8N_WEBHOOK_URL = 'https://webhook.red51.site/webhook/pedidos_red51';
const N8N_STATUS_UPDATE_WEBHOOK_URL = 'https://webhook.red51.site/webhook/pedidos-webhook';
const CLOUDINARY_CLOUD_NAME = 'dvj68er8s';
const CLOUDINARY_UPLOAD_PRESET = 'red51_productos';

// --- DEMO MODE CONFIG ---
const DEMO_MODE = true;
const mockData = {
    stores: [
        { 
            id: 1, 
            slug: 'gamer-gear', 
            name: 'Gamer Gear', 
            logo_url: 'https://res.cloudinary.com/dvj68er8s/image/upload/v1721939888/red51_productos/joystick_icon_hxzhv6.png', 
            theme_primary_color: '#8A2BE2', 
            theme_secondary_color: '#FFD700',
            design_settings: {
                template: 'moderna',
                colors: {
                    primary: '#8A2BE2',
                    secondary: '#FFD700',
                    background: '#f5f5f5',
                    text: '#1a1a1a'
                },
                fonts: {
                    headings: "'Poppins', sans-serif",
                    body: "'Lato', sans-serif"
                }
            }
        },
        { 
            id: 2, 
            slug: 'tech-haven', 
            name: 'Tech Haven', 
            logo_url: 'https://res.cloudinary.com/dvj68er8s/image/upload/v1721939888/red51_productos/computer_icon_b6j8ds.png', 
            theme_primary_color: '#1E90FF', 
            theme_secondary_color: '#32CD32',
            design_settings: {
                template: 'moderna',
                colors: {
                    primary: '#1E90FF',
                    secondary: '#32CD32',
                    background: '#ffffff',
                    text: '#1a1a1a'
                },
                fonts: {
                    headings: "'Roboto', sans-serif",
                    body: "'Roboto', sans-serif"
                }
            }
        },
    ],
    categories: [
        { id: 1, store_id: 1, nombre: 'Teclados', slug: 'teclados', icon: '⌨️', imagen_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800' },
        { id: 2, store_id: 1, nombre: 'Mouses', slug: 'mouses', icon: '🖱️', imagen_url: 'https://images.unsplash.com/photo-1615663249853-2d417770ea46?q=80&w=800' },
        { id: 3, store_id: 1, nombre: 'Monitores', slug: 'monitores', icon: '🖥️', imagen_url: 'https://images.unsplash.com/photo-1545431784-28564073b64c?q=80&w=800' },
        { id: 4, store_id: 2, nombre: 'Laptops', slug: 'laptops', icon: '💻', imagen_url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800' },
        { id: 5, store_id: 2, nombre: 'Smartphones', slug: 'smartphones', icon: '📱', imagen_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800' },
        { id: 6, store_id: 2, nombre: 'Accesorios', slug: 'accesorios', icon: '🎧', imagen_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800' },
    ],
    products: [
        { id: 101, store_id: 1, categoria_id: 1, nombre: 'Teclado Mecánico RGB', marca: 'Razer', precio: 150.00, stock: 25, activo: true, imagen_url: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa122?q=80&w=800', icon: '⌨️', badge: 'Popular', descripcion: 'Teclado mecánico con switches Green y retroiluminación RGB Chroma personalizable.', categorias: { id: 1, nombre: 'Teclados', slug: 'teclados' }, variantes: null },
        { id: 102, store_id: 1, categoria_id: 2, nombre: 'Mouse Gamer Pro Wireless', marca: 'Logitech', precio: 85.50, stock: 40, activo: true, imagen_url: 'https://images.unsplash.com/photo-1527814223725-ed2a0273d191?q=80&w=800', icon: '🖱️', badge: 'Nuevo', descripcion: 'Mouse inalámbrico ultraligero con sensor HERO 25K para máxima precisión.', categorias: { id: 2, nombre: 'Mouses', slug: 'mouses' }, variantes: null },
        { id: 103, store_id: 1, categoria_id: 3, nombre: 'Monitor Curvo 27" 144Hz', marca: 'Samsung', precio: 450.00, stock: 15, activo: true, imagen_url: 'https://images.unsplash.com/photo-1616037363422-aa46506a1f0a?q=80&w=800', icon: '🖥️', badge: 'Oferta', descripcion: 'Monitor gaming curvo de 27 pulgadas con resolución QHD y 144Hz de refresco.', categorias: { id: 3, nombre: 'Monitores', slug: 'monitores' }, variantes: null },
        { id: 104, store_id: 1, categoria_id: 2, nombre: 'Mousepad Extendido', marca: 'HyperX', precio: 30.00, stock: 0, activo: true, imagen_url: 'https://images.unsplash.com/photo-1594042557439-5a4e398c5d3f?q=80&w=800', icon: '🖱️', badge: null, descripcion: 'Alfombrilla de tela de gran tamaño para un deslizamiento suave y preciso.', categorias: { id: 2, nombre: 'Mouses', slug: 'mouses' }, variantes: null },
        { id: 201, store_id: 2, categoria_id: 4, nombre: 'Ultrabook Zen 14', marca: 'Asus', precio: 1200.00, stock: 10, activo: true, imagen_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800', icon: '💻', badge: null, descripcion: 'Laptop ultradelgada con pantalla OLED y procesador Intel Core i7 de última generación.', categorias: { id: 4, nombre: 'Laptops', slug: 'laptops' }, variantes: null },
        { id: 202, store_id: 2, categoria_id: 5, nombre: 'Pixel Pro 9', marca: 'Google', precio: 999.00, stock: 30, activo: true, imagen_url: 'https://images.unsplash.com/photo-1674439992523-847e06a3a44d?q=80&w=800', icon: '📱', badge: 'Nuevo', descripcion: 'El último smartphone de Google con la mejor cámara y chip Tensor G4.', categorias: { id: 5, nombre: 'Smartphones', slug: 'smartphones' }, variantes: null },
        { id: 203, store_id: 2, categoria_id: 6, nombre: 'Audífonos Noise Cancelling', marca: 'Sony', precio: 350.00, stock: 22, activo: true, imagen_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf4022?q=80&w=800', icon: '🎧', badge: 'Popular', descripcion: 'Audífonos con la mejor cancelación de ruido del mercado y sonido de alta resolución.', categorias: { id: 6, nombre: 'Accesorios', slug: 'accesorios' }, variantes: null },
    ],
    pedidos: [
        { id: 1, store_id: 1, cliente_nombre: 'Juan Perez', cliente_telefono: '987654321', cliente_email: 'juan@example.com', direccion: 'Av. Siempre Viva 123', total: 235.50, estado: 'entregado', created_at: new Date(Date.now() - 2 * 86400000).toISOString(), productos: [{ id: 101, nombre: 'Teclado Mecánico RGB', precio: 150.00, cantidad: 1 }, { id: 102, nombre: 'Mouse Gamer Pro Wireless', precio: 85.50, cantidad: 1 }] },
        { id: 2, store_id: 1, cliente_nombre: 'Maria Lopez', cliente_telefono: '912345678', cliente_email: 'maria@example.com', direccion: 'Calle Falsa 456', total: 450.00, estado: 'en_preparacion', created_at: new Date(Date.now() - 1 * 86400000).toISOString(), productos: [{ id: 103, nombre: 'Monitor Curvo 27" 144Hz', precio: 450.00, cantidad: 1 }] },
        { id: 3, store_id: 2, cliente_nombre: 'Carlos Sanchez', cliente_telefono: '955555555', cliente_email: 'carlos@example.com', direccion: 'Jr. de la Union 789', total: 1550.00, estado: 'pago_confirmado', created_at: new Date().toISOString(), productos: [{ id: 201, nombre: 'Ultrabook Zen 14', precio: 1200.00, cantidad: 1 }, { id: 203, nombre: 'Audífonos Noise Cancelling', precio: 350.00, cantidad: 1 }] },
    ]
};


let carrito = [];
let supabaseClient = null;
let categoriaActual = 'todos';
let productos = [];
let categorias = [];
let usuarioActual = null;
let pedidosAdmin = [];
let productosParaImportar = [];
let currentOrderView = 'list';
let currentOrderStatusFilter = 'todos';
let isProcessing = false;
let pedidosChannel = null;
let salesChartInstance = null;
let currentChartType = 'line';
let clientesMap = new Map();
let selectedLocation = null;
let currentStore = null;
let currentPreviewIndex = -1;

const estadoPedidoConfig = {
    'pendiente_pago': { nombre: 'Pendiente Pago', clase: 'status-pendiente_pago' },
    'pago_confirmado': { nombre: 'Confirmado', clase: 'status-pago_confirmado' },
    'en_preparacion': { nombre: 'En Preparación', clase: 'status-en_preparacion' },
    'enviado': { nombre: 'Enviado', clase: 'status-enviado' },
    'entregado': { nombre: 'Entregado', clase: 'status-entregado' },
    'cancelado': { nombre: 'Cancelado', clase: 'status-cancelado' }
};

// --- SAAS INITIALIZATION ---

async function initializeAppSaaS() {
    if (DEMO_MODE) {
        console.warn("Aplicación en MODO DEMO. La conexión con Supabase está desactivada y no se guardarán los datos.");
        supabaseClient = null;
        
        const params = new URLSearchParams(window.location.search);
        const storeSlug = params.get('store');
        
        if (storeSlug) {
            await loadStore(storeSlug);
        } else {
            renderLoginPage();
        }
        return;
    }
    
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
        usuarioActual = session.user;
        handlePostLogin();
    } else {
        const params = new URLSearchParams(window.location.search);
        const storeSlug = params.get('store');

        if (storeSlug) {
            await loadStore(storeSlug);
        } else {
            renderLoginPage();
        }
    }
}

function renderLoginPage() {
    document.getElementById('loginView').style.display = 'flex';
    document.getElementById('rootAdminView').style.display = 'none';
    document.getElementById('storeSelectionView').style.display = 'none';
    document.getElementById('appContainer').style.display = 'none';
}

function renderRootAdminDashboard() {
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('rootAdminView').style.display = 'block';
    document.getElementById('storeSelectionView').style.display = 'none';
    document.getElementById('appContainer').style.display = 'none';

    document.getElementById('rootAdminEmail').textContent = usuarioActual.email;
    
    // KPIs
    const totalStores = mockData.stores.length;
    const totalRevenue = mockData.pedidos.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = mockData.pedidos.length;
    
    document.getElementById('kpiTotalStores').textContent = totalStores;
    document.getElementById('kpiTotalRevenue').textContent = `S/ ${totalRevenue.toFixed(2)}`;
    document.getElementById('kpiTotalOrders').textContent = totalOrders;

    // Stores Table
    const tableBody = document.getElementById('rootAdminStoresTable');
    tableBody.innerHTML = mockData.stores.map((store, index) => {
        const storeOrders = mockData.pedidos.filter(p => p.store_id === store.id);
        const storeRevenue = storeOrders.reduce((sum, order) => sum + order.total, 0);

        return `
            <tr>
                <td><img src="${store.logo_url}" alt="${store.name}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"></td>
                <td><strong>${store.name}</strong></td>
                <td>/ ${store.slug}</td>
                <td>S/ ${storeRevenue.toFixed(2)}</td>
                <td>${storeOrders.length}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn-secondary" onclick="window.app.openStorePreview('${store.slug}', '${store.name}', ${index})">Ver</button>
                        <button class="btn-edit" onclick="window.app.openStoreModal(${store.id})">Editar</button>
                        <button class="btn-danger" onclick="window.app.deleteStore(${store.id})">Eliminar</button>
                        <button class="btn-secondary" onclick="window.app.forceLoginAndLoadStore('${store.slug}')">Admin Panel</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}


async function renderStoreSelection() {
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('rootAdminView').style.display = 'none';
    document.getElementById('storeSelectionView').style.display = 'block';
    document.getElementById('appContainer').style.display = 'none';

    try {
        let stores = [];
        if (DEMO_MODE) {
            stores = mockData.stores;
        } else {
            const { data, error } = await supabaseClient.from('stores').select('*').order('name');
            if (error) throw error;
            stores = data;
        }

        const grid = document.getElementById('storeGrid');
        grid.innerHTML = stores.map(store => `
            <div class="store-card" onclick="window.location.href = '?store=${store.slug}'">
                <div class="store-logo-wrapper">
                    ${store.logo_url ? `<img src="${store.logo_url}" alt="${store.name} logo">` : `<span>${store.name.charAt(0)}</span>`}
                </div>
                <div class="store-name">${store.name}</div>
            </div>
        `).join('');
        document.getElementById('loadingStores').style.display = 'none';
    } catch (error) {
        console.error("Error loading stores:", error);
        
        if (DEMO_MODE) { // Fallback to demo if Supabase fails even when not in explicit demo mode
             console.warn("Supabase falló. Cargando datos de demostración para tiendas.");
             const grid = document.getElementById('storeGrid');
             grid.innerHTML = mockData.stores.map(store => `
                <div class="store-card" onclick="window.location.href = '?store=${store.slug}'">
                    <div class="store-logo-wrapper">
                        ${store.logo_url ? `<img src="${store.logo_url}" alt="${store.name} logo">` : `<span>${store.name.charAt(0)}</span>`}
                    </div>
                    <div class="store-name">${store.name}</div>
                </div>
            `).join('');
            document.getElementById('loadingStores').style.display = 'none';
            return;
        }
        
        const errorDetails = formatSupabaseError(error);
        document.getElementById('loadingStores').innerHTML = `<div style="background: var(--warning-bg); border: 1px solid var(--warning-border); padding: 1.5rem; border-radius: 12px; text-align: left; max-width: 800px; margin: 2rem auto;">
            <h3 style="color: var(--warning-text); margin-top:0;">Error al cargar las tiendas</h3>
            <p style="color: var(--text-light);">No pudimos obtener la lista de tiendas. Aquí están los detalles del error:</p>
            <pre style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); white-space: pre-wrap; word-break: break-all; margin-top: 1rem; font-family: monospace; color: #c7254e;">${errorDetails}</pre>
            <p style="margin-top: 1.5rem; color: var(--text-light);"><strong>Sugerencia:</strong> La causa más común es una política de seguridad (RLS) en Supabase. Asegúrate de que la tabla 'stores' permita la lectura (SELECT) para el rol 'anon' (usuarios no autenticados).</p>
        </div>`;
    }
}

async function loadStore(slug) {
    try {
        let storeData = null;
        if (DEMO_MODE) {
            storeData = mockData.stores.find(s => s.slug === slug);
            if (!storeData) throw new Error("Store not found in mock data");
        } else {
            const { data, error } = await supabaseClient.from('stores').select('*').eq('slug', slug).single();
            if (error || !data) throw error || new Error("Store not found");
            storeData = data;
        }
        currentStore = storeData;
        
        document.getElementById('loginView').style.display = 'none';
        document.getElementById('rootAdminView').style.display = 'none';
        document.getElementById('storeSelectionView').style.display = 'none';
        document.getElementById('appContainer').style.display = 'block';
        
        applyCurrentDesignSettings();
        
        // This logic replaces the old `verificarSesion` call from here
        if (usuarioActual) {
            showAdmin();
        } else {
            showStore();
        }
        
        document.getElementById('chartTypeSwitcher').addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') {
                currentChartType = e.target.dataset.type;
                document.querySelectorAll('#chartTypeSwitcher button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                renderizarDashboard();
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.stock-details-container')) {
                document.querySelectorAll('.stock-details-breakdown').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.stock-summary.open').forEach(el => el.classList.remove('open'));
            }
        });
        
        await cargarCategorias();
        await cargarProductos();

    } catch (error) {
        console.error("Error loading store:", error);
        
        if (DEMO_MODE) { // Fallback for demo mode as well
            console.error("Could not load mock store. This shouldn't happen.");
        }

        const errorDetails = formatSupabaseError(error);
        document.body.innerHTML = `<div class="loading" style="padding: 2rem;">
            <div style="background: var(--warning-bg); border: 1px solid var(--warning-border); padding: 1.5rem; border-radius: 12px; text-align: left; max-width: 800px; margin: 2rem auto;">
                <h3 style="color: var(--warning-text); margin-top:0;">Error al cargar la tienda '${slug}'</h3>
                <p style="color: var(--text-light);">No pudimos cargar los datos de la tienda. Aquí están los detalles del error:</p>
                <pre style="background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); white-space: pre-wrap; word-break: break-all; margin-top: 1rem; font-family: monospace; color: #c7254e;">${errorDetails}</pre>
                <p style="margin-top: 1.5rem; color: var(--text-light);"><strong>Sugerencia:</strong> Verifica que el 'slug' de la tienda sea correcto y revisa la política de seguridad (RLS) de la tabla 'stores'.</p>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="/" class="btn-primary" style="text-decoration: none; display: inline-block; width: auto; padding: 1rem 2rem;">Volver al Portal</a>
            </div>
        </div>`;
    }
}

// --- DESIGN & BRANDING ---
function applyCurrentDesignSettings() {
    if (!currentStore || !currentStore.design_settings) {
        applyStoreBranding(); // Fallback to old method
        return;
    }

    const settings = currentStore.design_settings;
    
    // Apply template class
    const body = document.getElementById('storeBody');
    body.className = `template-${settings.template}`;

    // Apply colors and fonts via CSS variables
    const styleId = 'dynamic-store-styles';
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
    }
    
    styleEl.innerHTML = `
        :root {
            --primary: ${settings.colors.primary};
            --secondary: ${settings.colors.secondary};
            --accent: ${settings.colors.secondary};
            --light: ${settings.colors.background};
            --text-dark: ${settings.colors.text};
            --font-headings: ${settings.fonts.headings};
            --font-body: ${settings.fonts.body};
        }
    `;

    // Update Header
    const logoContainer = document.getElementById('storeLogoContainer');
    logoContainer.innerHTML = `
        ${currentStore.logo_url ? `<img src="${currentStore.logo_url}" alt="${currentStore.name}" style="height: 50px; width: auto; max-width: 150px; object-fit: contain;">` : `<span class="logo-red">${currentStore.name}</span>`}
    `;
    logoContainer.onclick = () => window.location.href = `?store=${currentStore.slug}`;

    // Update Footer
    document.getElementById('footer-info').innerHTML = `
        <div class="logo">${currentStore.name}</div>
        <p style="margin-top: 1rem; color: rgba(255,255,255,0.7);">Innovación y calidad en cada producto que ofrecemos.</p>
    `;
    document.getElementById('footer-copyright').innerHTML = `<p>&copy; ${new Date().getFullYear()} ${currentStore.name}. Todos los derechos reservados.</p>`;
    
    // Update Page Title
    document.title = `${currentStore.name} - Tienda Online`;
}

function applyStoreBranding() {
    // This is now a fallback if design_settings is missing
    if (!currentStore) return;

    if (currentStore.theme_primary_color || currentStore.theme_secondary_color) {
        const style = document.createElement('style');
        style.innerHTML = `
            :root {
                ${currentStore.theme_primary_color ? `--primary: ${currentStore.theme_primary_color};` : ''}
                ${currentStore.theme_secondary_color ? `--secondary: ${currentStore.theme_secondary_color};` : ''}
                ${currentStore.theme_secondary_color ? `--accent: ${currentStore.theme_secondary_color};` : ''}
            }
        `;
        document.head.appendChild(style);
    }
    // Other branding elements are now in applyCurrentDesignSettings
}

// --- AUTHENTICATION ---
async function iniciarSesion(event) {
    event.preventDefault();
    const email = document.getElementById('saasEmail').value;
    const password = document.getElementById('saasPassword').value;
    const errorDiv = document.getElementById('saasLoginError');
    errorDiv.style.display = 'none';
    
    if (DEMO_MODE) {
        if (email) {
            usuarioActual = { email: email, id: 'demo-user-id', role: 'demo' };
            mostrarNotificacion(`Bienvenido, ${email}! (Modo Demo)`, 'success');
            handlePostLogin();
        } else {
            errorDiv.style.display = 'block';
            errorDiv.textContent = 'Por favor, ingrese un correo.';
        }
        return;
    }

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        usuarioActual = data.user;
        handlePostLogin();
    } catch (error) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Error al iniciar sesion: ' + error.message;
    }
}

async function handlePostLogin() {
    const email = usuarioActual.email;
    
    // Role simulation for Demo Mode
    if (email === 'admin@saas.com') {
        usuarioActual.role = 'root_admin';
        renderRootAdminDashboard();
    } else {
        const storeSlug = email.split('@')[1]?.split('.')[0];
        const store = mockData.stores.find(s => s.slug === storeSlug);
        if (store) {
            usuarioActual.role = 'store_owner';
            await loadStore(store.slug);
        } else {
            // Default behavior if user is not a root admin or store owner
            // In a real app, you might show an error or a "create store" page.
            await renderStoreSelection();
        }
    }
}

async function forceLoginAndLoadStore(slug) {
    // This is a helper for the root admin to jump into a store's admin panel
    usuarioActual = { email: 'admin@saas.com (View as Owner)', id: 'root-admin-id', role: 'store_owner' };
    await loadStore(slug);
}

function mostrarPanelAdmin() {
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('adminEmail').textContent = usuarioActual.email;
    document.getElementById('adminPanelTitle').textContent = `Panel de Administración (${currentStore.name})`;
    cargarProductosAdmin();
    cargarPedidosAdmin();
    cargarCategoriasAdmin();
    mostrarVistaAdmin('dashboard'); 
    suscribirACambiosPedidos();
}

async function cerrarSesion() {
    if (DEMO_MODE) {
        usuarioActual = null;
        renderLoginPage();
        return;
    }

    if (pedidosChannel) {
        supabaseClient.removeChannel(pedidosChannel);
        pedidosChannel = null;
    }
    await supabaseClient.auth.signOut();
    usuarioActual = null;
    window.location.href = '/'; // Redirect to home/login
}

// --- VIEW MANAGEMENT ---
function showStore() {
    document.getElementById('tiendaView').style.display = 'block';
    document.getElementById('adminView').style.display = 'none';
}

function showAdmin() {
    document.getElementById('tiendaView').style.display = 'none';
    document.getElementById('adminView').style.display = 'block';
    
    if (usuarioActual) {
        mostrarPanelAdmin();
    } else {
        // This part is less likely to be hit with the new flow, but good for safety
        renderLoginPage(); 
    }
}

async function mostrarVistaAdmin(vista) {
    document.getElementById('adminDashboardView').style.display = vista === 'dashboard' ? 'block' : 'none';
    document.getElementById('adminProductosView').style.display = vista === 'productos' ? 'block' : 'none';
    document.getElementById('adminCategoriasView').style.display = vista === 'categorias' ? 'block' : 'none';
    document.getElementById('adminPedidosView').style.display = vista === 'pedidos' ? 'block' : 'none';
    document.getElementById('adminClientesView').style.display = vista === 'clientes' ? 'block' : 'none';
    document.getElementById('adminDisenoView').style.display = vista === 'diseno' ? 'block' : 'none';
    
    ['Dashboard', 'Productos', 'Categorias', 'Pedidos', 'Clientes', 'Diseno'].forEach(v => {
        const tab = document.getElementById(`tab${v}`);
        if(tab) tab.classList.toggle('active', vista === v.toLowerCase());
    });

    if (vista === 'productos') renderizarListaCategoriasImportacion();
    else if (vista === 'dashboard') renderizarDashboard();
    else if (vista === 'clientes') renderizarClientes();
    else if (vista === 'pedidos') renderizarPedidosAdmin();
    else if (vista === 'diseno') inicializarPanelDiseno();
}

// --- DATA LOADING & RENDERING (SAAS-enabled) ---

async function cargarCategorias() {
    if (!currentStore) return;
    try {
        if (DEMO_MODE) {
            categorias = mockData.categories.filter(c => c.store_id === currentStore.id);
        } else {
            const { data, error } = await supabaseClient
                .from('categorias')
                .select('*')
                .eq('store_id', currentStore.id)
                .order('nombre');
            if (error) throw error;
            categorias = data || [];
        }
        popularDropdownCategorias();
        renderizarCategorias(); 
        renderizarFooterCategorias();
    } catch (error) {
        console.error('Error al cargar categorias:', error);
        document.getElementById('categoryFilter').innerHTML = `<p style="color: var(--danger);">Error al cargar categorías.</p>`;
    }
}

async function cargarProductos() {
    if (!currentStore) return;
    document.getElementById('loadingProducts').style.display = 'block';

    try {
        if (DEMO_MODE) {
            productos = mockData.products.filter(p => p.store_id === currentStore.id);
        } else {
            const { data, error } = await supabaseClient
                .from('productos')
                .select('*, categorias(id, nombre, slug)')
                .eq('store_id', currentStore.id)
                .eq('activo', true)
                .order('nombre');
            if (error) throw error;
            if (!data) {
                document.getElementById('productsGrid').innerHTML = '<div class="empty-cart"><p>No hay productos disponibles. Ve al panel Admin para agregar productos.</p></div>';
                return;
            }
            productos = data;
        }

        if (productos.length === 0) {
            document.getElementById('productsGrid').innerHTML = '<div class="empty-cart"><p>No hay productos disponibles. Ve al panel Admin para agregar productos.</p></div>';
        } else {
            renderizarProductos();
        }
    } catch (error) {
        console.error('Error al cargar productos:', error);
        document.getElementById('productsGrid').innerHTML = `<div class="empty-cart"><p>Error al cargar productos: ${error.message}</p></div>`;
    } finally {
        document.getElementById('loadingProducts').style.display = 'none';
    }
}

function popularDropdownCategorias() {
    const select = document.getElementById('productoCategoria');
    if (!select) return;
    select.innerHTML = categorias.map(cat => `<option value="${cat.id}">${cat.nombre}</option>`).join('');
}

function renderizarCategorias() {
    const filterContainer = document.getElementById('categoryFilter');
    const todosBtn = `<div class="category-item ${'todos' === categoriaActual ? 'active' : ''}" onclick="window.app.filtrarCategoria('todos')"><div class="category-icon-wrapper">🌐</div><span class="category-name">Todos</span></div>`;
    const categoriasBtns = categorias.map(cat => {
        const style = cat.imagen_url ? `background-image: url('${optimizarImagenUrl(cat.imagen_url, 140)}');` : '';
        const iconContent = cat.imagen_url ? '' : (cat.icon || '📁');
        return `<div class="category-item ${cat.slug === categoriaActual ? 'active' : ''}" onclick="window.app.filtrarCategoria('${cat.slug}')"><div class="category-icon-wrapper" style="${style}">${iconContent}</div><span class="category-name">${cat.nombre}</span></div>`;
    }).join('');
    filterContainer.innerHTML = todosBtn + categoriasBtns;
}

function renderizarFooterCategorias() {
    const footerList = document.getElementById('footer-categories');
    if(categorias.length > 0) {
        footerList.innerHTML = categorias.map(cat => 
            `<li><a href="#" onclick="event.preventDefault(); window.app.filtrarCategoria('${cat.slug}'); document.getElementById('productsSection').scrollIntoView({behavior: 'smooth'});">${cat.nombre}</a></li>`
        ).join('');
    } else {
        footerList.innerHTML = '';
    }
}

function filtrarCategoria(categoriaSlug) {
    categoriaActual = categoriaSlug;
    const categoriaSeleccionada = categorias.find(c => c.slug === categoriaSlug);
    document.getElementById('productsTitle').textContent = categoriaSeleccionada ? `Productos de ${categoriaSeleccionada.nombre}` : 'Todos Nuestros Productos';
    renderizarCategorias();
    renderizarProductos();
}

function renderizarProductos() {
    const grid = document.getElementById('productsGrid');
    const productosFiltrados = categoriaActual === 'todos' 
        ? productos 
        : productos.filter(p => p.categorias && p.categorias.slug === categoriaActual);
    if (productosFiltrados.length === 0) {
        grid.innerHTML = '<div class="empty-cart"><p>No hay productos en esta categoria.</p></div>';
        return;
    }
    grid.innerHTML = productosFiltrados.map(producto => {
        const isOutOfStock = !producto.stock || producto.stock <= 0;
        const hasVariants = producto.variantes && producto.variantes.groups && producto.variantes.groups.length > 0;
        let priceDisplay = `S/ ${parseFloat(producto.precio).toFixed(2)}`;
        if (hasVariants) {
            const allVariantPrices = producto.variantes.groups.flatMap(g => g.variants.map(v => v.precio));
            if (allVariantPrices.length > 0) {
                const minPrice = Math.min(...allVariantPrices.filter(p => p > 0));
                priceDisplay = `Desde S/ ${parseFloat(minPrice).toFixed(2)}`;
            }
        }
        return `
        <div class="product-card">
            <div class="product-image" onclick="window.app.mostrarDetalleProducto(${producto.id})">
                ${isOutOfStock ? `<div class="product-out-of-stock-overlay"><span class="out-of-stock-badge">Agotado</span></div>` : ''}
                ${producto.imagen_url 
                    ? `<img src="${optimizarImagenUrl(producto.imagen_url)}" alt="${producto.nombre}" loading="lazy">`
                    : `<span>${producto.icon || '📦'}</span>`}
                ${producto.badge ? `<span class="product-badge">${producto.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categorias ? producto.categorias.nombre : 'Sin Categoria'}</div>
                <h3 class="product-name" onclick="window.app.mostrarDetalleProducto(${producto.id})">${producto.nombre}</h3>
                <div class="product-price">${priceDisplay}</div>
            </div>
            <div class="product-actions">
                <button class="btn-add-quick" title="${isOutOfStock ? 'Producto Agotado' : 'Ver opciones'}" onclick="event.stopPropagation(); window.app.quickAdd(${producto.id})" ${isOutOfStock ? 'disabled' : ''}>
                     ${isOutOfStock ? '×' : (hasVariants ? '...' : '+')}
                </button>
            </div>
        </div>`;
    }).join('');
}

function quickAdd(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;
    const hasVariants = producto.variantes && producto.variantes.groups && producto.variantes.groups.length > 0;
    if (hasVariants) {
        mostrarDetalleProducto(productoId);
    } else {
        agregarAlCarrito(productoId, 1);
    }
}

// --- ADMIN CRUD FUNCTIONS ---

async function cargarProductosAdmin() {
    if (!currentStore) return;
    const loading = document.getElementById('loadingAdmin');
    if(loading) loading.style.display = 'block';
    const tableBody = document.getElementById('adminProductsTable');
    if(!tableBody) return;
    tableBody.innerHTML = '';

    try {
        const searchTerm = document.getElementById('productSearch').value.toLowerCase();
        let data = [];

        if (DEMO_MODE) {
            data = mockData.products.filter(p => p.store_id === currentStore.id);
        } else {
            let query = supabaseClient
                .from('productos')
                .select('*, categorias(nombre)')
                .eq('store_id', currentStore.id)
                .order('nombre');

            if (searchTerm) {
                query = query.or(`nombre.ilike.%${searchTerm}%,marca.ilike.%${searchTerm}%`);
            }
            const { data: dbData, error } = await query;
            if (error) throw error;
            data = dbData;
        }
        
        if (searchTerm) {
            data = data.filter(p => p.nombre.toLowerCase().includes(searchTerm) || (p.marca && p.marca.toLowerCase().includes(searchTerm)));
        }

        if (data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="9" class="loading">No se encontraron productos.</td></tr>';
            return;
        }

        tableBody.innerHTML = data.map(p => {
            const stockOk = p.stock > 10;
            const stockLow = p.stock > 0 && p.stock <= 10;
            
            let stockDisplay;
            const hasVariants = p.variantes && p.variantes.groups && p.variantes.groups.length > 0;

            if (hasVariants) {
                 stockDisplay = `
                    <div class="stock-details-container" onclick="event.stopPropagation(); this.querySelector('.stock-details-breakdown').style.display = 'block'; this.querySelector('.stock-summary').classList.add('open')">
                        <div class="stock-summary">
                            <span>Total: ${p.stock}</span> <span class="stock-toggle-icon">▼</span>
                        </div>
                        <div class="stock-details-breakdown" style="display:none;">
                            <div class="stock-details-header">Desglose de Stock</div>
                            <ul>
                                ${p.variantes.groups.flatMap(g => g.variants.map(v => `<li><span class="variant-name">${g.primaryValue} / ${v.secondaryValue}</span> <span class="variant-stock">${v.stock}</span></li>`)).join('')}
                            </ul>
                        </div>
                    </div>`;
            } else {
                 stockDisplay = `<span class="stock-indicator ${stockOk ? 'stock-ok' : stockLow ? 'stock-low' : 'stock-out'}">${p.stock}</span>`;
            }

            const categoriaNombre = categorias.find(c => c.id === p.categoria_id)?.nombre || 'Sin categoría';

            return `
            <tr onclick="window.app.abrirModalProducto(${p.id})">
                <td>
                    ${p.imagen_url 
                        ? `<img src="${optimizarImagenUrl(p.imagen_url, 100)}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">`
                        : `<div style="width:50px; height:50px; display:flex; align-items:center; justify-content:center; background:#eee; border-radius:8px; font-size: 2rem;">${p.icon || '📦'}</div>`
                    }
                </td>
                <td>${p.icon || '-'}</td>
                <td>${p.nombre}</td>
                <td>${p.marca}</td>
                <td>${DEMO_MODE ? categoriaNombre : (p.categorias ? p.categorias.nombre : 'Sin categoría')}</td>
                <td>S/ ${parseFloat(p.precio).toFixed(2)}</td>
                <td>${stockDisplay}</td>
                <td><span style="font-weight:600; color: ${p.activo ? 'var(--success)' : 'var(--danger)'};">${p.activo ? 'Activo' : 'Inactivo'}</span></td>
                <td>
                    <div class="table-actions">
                        <button class="btn-edit" onclick="event.stopPropagation(); window.app.abrirModalProducto(${p.id})">Editar</button>
                        <button class="btn-danger" onclick="event.stopPropagation(); window.app.eliminarProducto(${p.id})">Eliminar</button>
                    </div>
                </td>
            </tr>
            `;
        }).join('');
    } catch(error) {
        console.error("Error al cargar productos para admin:", error);
        tableBody.innerHTML = `<tr><td colspan="9" class="loading" style="color:var(--danger)">Error al cargar productos.</td></tr>`;
    } finally {
        if(loading) loading.style.display = 'none';
    }
}

async function cargarCategoriasAdmin() {
    if (!currentStore) return;
    const loading = document.getElementById('loadingAdminCategorias');
    if (loading) loading.style.display = 'block';
    const tableBody = document.getElementById('adminCategoriesTable');
    if (!tableBody) return;

    try {
        let data = [];
        if (DEMO_MODE) {
            data = categorias; // `categorias` is already filtered by store
        } else {
            const { data: dbData, error } = await supabaseClient
                .from('categorias')
                .select('*')
                .eq('store_id', currentStore.id)
                .order('nombre');
            if (error) throw error;
            data = dbData;
        }
        
        tableBody.innerHTML = data.map(cat => `
            <tr onclick="window.app.abrirModalCategoria(${JSON.stringify(cat).replace(/"/g, '&quot;')})">
                <td>${cat.imagen_url ? `<img src="${optimizarImagenUrl(cat.imagen_url, 100)}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">` : `<div style="width:50px; height:50px; display:flex; align-items:center; justify-content:center; background:#eee; border-radius:8px; font-size: 2rem;">${cat.icon || '📁'}</div>`}</td>
                <td>${cat.icon}</td>
                <td>${cat.nombre}</td>
                <td>${cat.slug}</td>
                <td>
                    <div class="table-actions">
                         <button class="btn-edit" onclick="event.stopPropagation(); window.app.abrirModalCategoria(${JSON.stringify(cat).replace(/"/g, '&quot;')})">Editar</button>
                        <button class="btn-danger" onclick="event.stopPropagation(); window.app.eliminarCategoria(${cat.id})">Eliminar</button>
                    </div>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Error al cargar categorías para admin:", error);
        tableBody.innerHTML = '<tr><td colspan="5" style="color:var(--danger)">Error al cargar categorías</td></tr>';
    } finally {
        if (loading) loading.style.display = 'none';
    }
}

async function eliminarProducto(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.')) return;

    if (DEMO_MODE) {
        const index = mockData.products.findIndex(p => p.id === id && p.store_id === currentStore.id);
        if (index > -1) {
            mockData.products.splice(index, 1);
            mostrarNotificacion('Producto eliminado (Modo Demo)', 'success');
            await cargarProductosAdmin();
            await cargarProductos();
        }
        return;
    }

    try {
        const { error } = await supabaseClient.from('productos').delete().eq('id', id).eq('store_id', currentStore.id);
        if (error) throw error;
        mostrarNotificacion('Producto eliminado con éxito', 'success');
        await cargarProductosAdmin();
        await cargarProductos();
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        mostrarNotificacion(`Error al eliminar producto: ${error.message}`, 'error');
    }
}

async function eliminarCategoria(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta categoría? Los productos asociados quedarán sin categoría.')) return;
    
    if (DEMO_MODE) {
        mockData.products.forEach(p => {
            if (p.categoria_id === id) {
                p.categoria_id = null;
                p.categorias = null;
            }
        });
        const index = mockData.categories.findIndex(c => c.id === id && c.store_id === currentStore.id);
        if (index > -1) {
            mockData.categories.splice(index, 1);
        }
        mostrarNotificacion('Categoría eliminada (Modo Demo)', 'success');
        await cargarCategoriasAdmin();
        await cargarCategorias();
        renderizarListaCategoriasImportacion();
        return;
    }

    try {
        const { error: updateError } = await supabaseClient
            .from('productos')
            .update({ categoria_id: null })
            .eq('categoria_id', id)
            .eq('store_id', currentStore.id);
        
        if (updateError) throw updateError;
        
        const { error: deleteError } = await supabaseClient
            .from('categorias')
            .delete()
            .eq('id', id)
            .eq('store_id', currentStore.id);
            
        if (deleteError) throw deleteError;
        
        mostrarNotificacion('Categoría eliminada con éxito', 'success');
        await cargarCategoriasAdmin();
        await cargarCategorias();
        renderizarListaCategoriasImportacion();
    } catch (error) {
        console.error('Error al eliminar categoría:', error);
        mostrarNotificacion(`Error al eliminar categoría: ${error.message}`, 'error');
    }
}

async function guardarProducto(event) {
    event.preventDefault();
    if (!currentStore) return;
    
    let totalStock = 0;
    let variantesData = null;
    const variantGroupsContainer = document.getElementById('variantGroupsContainer');
    const hasVariants = variantGroupsContainer.children.length > 0;

    if (hasVariants) {
        const primaryOptionName = document.getElementById('primaryOptionName').value.trim() || 'Opción Principal';
        const secondaryOptionName = document.getElementById('secondaryOptionName').value.trim() || 'Opción Secundaria';
        const groups = [];

        for (const groupEl of variantGroupsContainer.children) {
            const primaryValue = groupEl.dataset.primaryValue;
            const variants = [];
            const rows = groupEl.querySelectorAll('tbody tr');
            for (const row of rows) {
                const secondaryValue = row.querySelector('.variant-secondary-value').value;
                const price = parseFloat(row.querySelector('.variant-price').value) || parseFloat(document.getElementById('productoPrecio').value);
                const stock = parseInt(row.querySelector('.variant-stock').value) || 0;
                const image = row.querySelector('.variant-image').value || null;
                
                if (secondaryValue && stock >= 0) {
                    variants.push({ secondaryValue, precio: price, stock, imagen_url: image });
                    totalStock += stock;
                }
            }
            if (variants.length > 0) {
                groups.push({ primaryValue, variants });
            }
        }
        variantesData = { primaryOptionName, secondaryOptionName, groups };
    } else {
        totalStock = parseInt(document.getElementById('productoStock').value) || 0;
    }

    const id = document.getElementById('productoId').value;
    const productoData = {
        nombre: document.getElementById('productoNombre').value,
        marca: document.getElementById('productoMarca').value,
        categoria_id: parseInt(document.getElementById('productoCategoria').value),
        descripcion: document.getElementById('productoDescripcion').value,
        precio: parseFloat(document.getElementById('productoPrecio').value),
        stock: totalStock,
        activo: document.getElementById('productoActivo').checked,
        imagen_url: document.getElementById('productoImagen').value || null,
        icon: document.getElementById('productoIcon').value || '📦',
        badge: document.getElementById('productoBadge').value || null,
        variantes: variantesData,
        store_id: currentStore.id
    };

    if (DEMO_MODE) {
        if (id) { // Update
            const index = mockData.products.findIndex(p => p.id == id);
            if (index > -1) {
                mockData.products[index] = { ...mockData.products[index], ...productoData, id: parseInt(id) };
            }
        } else { // Create
            const newId = Math.max(...mockData.products.map(p => p.id)) + 1;
            mockData.products.push({ ...productoData, id: newId });
        }
        mostrarNotificacion(id ? 'Producto actualizado (Modo Demo)' : 'Producto creado (Modo Demo)', 'success');
        cerrarModalProducto();
        await cargarProductosAdmin();
        await cargarProductos();
        return;
    }
    
    try {
        const { error } = await (id 
            ? supabaseClient.from('productos').update(productoData).eq('id', id).eq('store_id', currentStore.id)
            : supabaseClient.from('productos').insert([productoData])
        );
        if (error) throw error;
        mostrarNotificacion(id ? 'Producto actualizado' : 'Producto creado', 'success');
        cerrarModalProducto();
        await cargarProductosAdmin();
        await cargarProductos();
    } catch (error) {
        console.error('Error al guardar producto:', error);
        mostrarNotificacion('Error al guardar producto: ' + error.message, 'error');
    }
}

async function guardarCategoria(event) {
    event.preventDefault();
    if (!currentStore) return;
    const id = document.getElementById('categoriaId').value;
    const categoriaData = {
        nombre: document.getElementById('categoriaNombre').value,
        slug: document.getElementById('categoriaSlug').value,
        icon: document.getElementById('categoriaIcon').value || '📁',
        imagen_url: document.getElementById('categoriaImagen').value || null,
        store_id: currentStore.id
    };

    if (DEMO_MODE) {
        if (id) { // Update
            const index = mockData.categories.findIndex(c => c.id == id);
            if (index > -1) {
                mockData.categories[index] = { ...mockData.categories[index], ...categoriaData, id: parseInt(id) };
            }
        } else { // Create
            const newId = Math.max(...mockData.categories.map(c => c.id)) + 1;
            mockData.categories.push({ ...categoriaData, id: newId });
        }
        mostrarNotificacion(id ? 'Categoría actualizada (Modo Demo)' : 'Categoría creada (Modo Demo)', 'success');
        cerrarModalCategoria();
        await cargarCategoriasAdmin();
        await cargarCategorias();
        renderizarListaCategoriasImportacion();
        return;
    }
    
    try {
        const { error } = await (id 
            ? supabaseClient.from('categorias').update(categoriaData).eq('id', id).eq('store_id', currentStore.id)
            : supabaseClient.from('categorias').insert([categoriaData])
        );
        if (error) throw error;
        mostrarNotificacion(id ? 'Categoría actualizada' : 'Categoría creada', 'success');
        cerrarModalCategoria();
        await cargarCategoriasAdmin();
        await cargarCategorias();
        renderizarListaCategoriasImportacion();
    } catch (error) {
        console.error('Error al guardar categoría:', error);
        mostrarNotificacion('Error al guardar categoría: ' + error.message, 'error');
    }
}

// --- MODAL & FORM HELPERS ---

function previewImagen(previewElementId, url) {
    const preview = document.getElementById(previewElementId);
    if (!preview) return;
    const text = preview.querySelector('.image-preview-text');
    
    const existingImg = preview.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }

    if (url) {
        const img = document.createElement('img');
        img.src = url;
        preview.appendChild(img);
        if (text) text.style.display = 'none';
    } else {
        if (text) text.style.display = 'block';
    }
}

async function subirImagenCloudinary(event, type) {
    if (DEMO_MODE) {
        mostrarNotificacion('La subida de imágenes está desactivada en Modo Demo.', 'info');
        const imageInputId = type === 'producto' ? 'productoImagen' : 'categoriaImagen';
        const previewId = type === 'producto' ? 'imagePreview' : 'imagePreviewCategoria';
        const demoImageUrl = 'https://res.cloudinary.com/dvj68er8s/image/upload/v1721940659/red51_productos/demo_placeholder_xwp5k9.png';
        document.getElementById(imageInputId).value = demoImageUrl;
        previewImagen(previewId, demoImageUrl);
        return;
    }

    const file = event.target.files[0];
    if (!file) return;

    const progressBarId = type === 'producto' ? 'uploadProgressBarProducto' : 'uploadProgressBarCategoria';
    const progressContainerId = type === 'producto' ? 'uploadProgressProducto' : 'uploadProgressCategoria';
    const imageInputId = type === 'producto' ? 'productoImagen' : 'categoriaImagen';
    const previewId = type === 'producto' ? 'imagePreview' : 'imagePreviewCategoria';

    const progressBar = document.getElementById(progressBarId);
    const progressContainer = document.getElementById(progressContainerId);
    
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, true);

        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                const percentCompleted = Math.round((e.loaded / e.total) * 100);
                progressBar.style.width = `${percentCompleted}%`;
            }
        };

        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                document.getElementById(imageInputId).value = data.secure_url;
                previewImagen(previewId, data.secure_url);
                mostrarNotificacion('Imagen subida con éxito', 'success');
            } else {
                const errorData = JSON.parse(xhr.responseText);
                throw new Error(errorData.error.message || 'Error en la respuesta del servidor');
            }
        };
        
        xhr.onerror = function() {
            throw new Error("Error de red durante la subida.");
        };

        xhr.onloadend = function() {
            setTimeout(() => {
                progressContainer.style.display = 'none';
                progressBar.style.width = '0%';
            }, 1000);
        };

        xhr.send(formData);
        
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        mostrarNotificacion('Error al subir imagen: ' + error.message, 'error');
        setTimeout(() => {
            progressContainer.style.display = 'none';
            progressBar.style.width = '0%';
        }, 1000);
    }
}

async function abrirModalProducto(productoId = null) {
    const form = document.getElementById('productoForm');
    form.reset();
    document.getElementById('productoId').value = '';
    document.getElementById('productoModalTitle').textContent = 'Agregar Producto';
    
    document.getElementById('variantGroupsContainer').innerHTML = '';
    document.getElementById('primaryOptionName').value = 'Color';
    document.getElementById('secondaryOptionName').value = 'Talla';

    previewImagen('imagePreview', '');
    document.getElementById('productoImagen').value = '';
    
    const stockInput = document.getElementById('productoStock');
    stockInput.readOnly = false;
    stockInput.style.backgroundColor = '';

    popularDropdownCategorias();

    if (productoId) {
        document.getElementById('productoModalTitle').textContent = 'Editar Producto';
        try {
            let producto = null;
            if (DEMO_MODE) {
                producto = mockData.products.find(p => p.id === productoId);
            } else {
                const { data, error } = await supabaseClient
                    .from('productos')
                    .select('*, categorias(id, nombre)')
                    .eq('id', productoId)
                    .single();
                if (error) throw error;
                producto = data;
            }

            if (producto) {
                document.getElementById('productoId').value = producto.id;
                document.getElementById('productoNombre').value = producto.nombre;
                document.getElementById('productoMarca').value = producto.marca;
                document.getElementById('productoCategoria').value = producto.categoria_id;
                document.getElementById('productoDescripcion').value = producto.descripcion;
                document.getElementById('productoPrecio').value = producto.precio;
                document.getElementById('productoStock').value = producto.stock;
                document.getElementById('productoActivo').checked = producto.activo;
                document.getElementById('productoImagen').value = producto.imagen_url || '';
                document.getElementById('productoIcon').value = producto.icon || '';
                document.getElementById('productoBadge').value = producto.badge || '';
                previewImagen('imagePreview', producto.imagen_url);

                if (producto.variantes && producto.variantes.groups) {
                    stockInput.readOnly = true;
                    stockInput.style.backgroundColor = '#e9ecef';
                    document.getElementById('primaryOptionName').value = producto.variantes.primaryOptionName || 'Opción Principal';
                    document.getElementById('secondaryOptionName').value = producto.variantes.secondaryOptionName || 'Opción Secundaria';
                    
                    const container = document.getElementById('variantGroupsContainer');
                    container.innerHTML = producto.variantes.groups.map(group => `
                        <div class="variant-group-block" id="group_${group.primaryValue.replace(/\s+/g, '_')}" data-primary-value="${group.primaryValue}">
                            <div class="variant-group-header">
                                <h4>${producto.variantes.primaryOptionName}: ${group.primaryValue}</h4>
                                <button type="button" class="btn-danger" onclick="this.closest('.variant-group-block').remove()">Eliminar Grupo</button>
                            </div>
                            <table class="products-table">
                                <thead>
                                    <tr>
                                        <th>${producto.variantes.secondaryOptionName}</th>
                                        <th>Precio (S/)</th>
                                        <th>Stock</th>
                                        <th class="variant-image-cell">Imagen (URL)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${group.variants.map(v => `
                                    <tr>
                                        <td><input type="text" class="variant-secondary-value" value="${v.secondaryValue}" required></td>
                                        <td><input type="number" class="variant-price" step="0.01" value="${v.precio}"></td>
                                        <td><input type="number" class="variant-stock" step="1" value="${v.stock}" required></td>
                                        <td class="variant-image-cell">
                                            <div class="variant-image-input-wrapper">
                                                <input type="url" class="variant-image" value="${v.imagen_url || ''}" oninput="window.app.updateVariantImagePreview(this)">
                                                <div class="variant-image-preview">${v.imagen_url ? `<img src="${v.imagen_url}">` : '🖼️'}</div>
                                            </div>
                                        </td>
                                        <td><button type="button" class="btn-danger" onclick="this.closest('tr').remove()">×</button></td>
                                    </tr>
                                `).join('')}
                                </tbody>
                            </table>
                            <button type="button" class="btn-secondary" style="margin-top: 0.5rem;" onclick="window.app.addVariantRowUI(this, '${producto.variantes.secondaryOptionName}')">+ Añadir ${producto.variantes.secondaryOptionName}</button>
                        </div>
                    `).join('');
                }
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
            mostrarNotificacion('No se pudo cargar el producto para editar.', 'error');
            return;
        }
    }

    document.getElementById('productoModal').style.display = 'block';
}

function cerrarModalProducto() {
    document.getElementById('productoModal').style.display = 'none';
}

function abrirModalCategoria(categoria = null) {
    const form = document.getElementById('categoriaForm');
    form.reset();
    document.getElementById('categoriaId').value = '';
    document.getElementById('categoriaModalTitle').textContent = 'Agregar Categoría';
    
    previewImagen('imagePreviewCategoria', '');
    document.getElementById('categoriaImagen').value = '';

    if (categoria) {
        document.getElementById('categoriaModalTitle').textContent = 'Editar Categoría';
        document.getElementById('categoriaId').value = categoria.id;
        document.getElementById('categoriaNombre').value = categoria.nombre;
        document.getElementById('categoriaSlug').value = categoria.slug;
        document.getElementById('categoriaImagen').value = categoria.imagen_url || '';
        document.getElementById('categoriaIcon').value = categoria.icon || '';
        previewImagen('imagePreviewCategoria', categoria.imagen_url || '');
    }

    document.getElementById('categoriaModal').style.display = 'block';
}

function cerrarModalCategoria() {
    document.getElementById('categoriaModal').style.display = 'none';
}

function addVariantGroupUI() {
    const primaryOptionName = document.getElementById('primaryOptionName').value.trim() || 'Opción Principal';
    const newPrimaryValue = document.getElementById('newPrimaryValueInput').value.trim();
    if (!newPrimaryValue) {
        mostrarNotificacion('Por favor, ingresa un valor para la opción principal (ej. Negro, Blanco).', 'error');
        return;
    }

    const secondaryOptionName = document.getElementById('secondaryOptionName').value.trim() || 'Opción Secundaria';
    const container = document.getElementById('variantGroupsContainer');
    
    const groupId = `group_${newPrimaryValue.replace(/\s+/g, '_')}`;
    if (document.getElementById(groupId)) {
        mostrarNotificacion(`El grupo "${newPrimaryValue}" ya existe.`, 'error');
        return;
    }

    const groupBlock = document.createElement('div');
    groupBlock.className = 'variant-group-block';
    groupBlock.id = groupId;
    groupBlock.dataset.primaryValue = newPrimaryValue;

    groupBlock.innerHTML = `
        <div class="variant-group-header">
            <h4>${primaryOptionName}: ${newPrimaryValue}</h4>
            <button type="button" class="btn-danger" onclick="this.closest('.variant-group-block').remove()">Eliminar Grupo</button>
        </div>
        <table class="products-table">
            <thead>
                <tr>
                    <th>${secondaryOptionName}</th>
                    <th>Precio (S/)</th>
                    <th>Stock</th>
                    <th class="variant-image-cell">Imagen (URL)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <button type="button" class="btn-secondary" style="margin-top: 0.5rem;" onclick="window.app.addVariantRowUI(this, '${secondaryOptionName}')">+ Añadir ${secondaryOptionName}</button>
    `;

    container.appendChild(groupBlock);
    document.getElementById('newPrimaryValueInput').value = '';
    
    const stockInput = document.getElementById('productoStock');
    stockInput.readOnly = true;
    stockInput.style.backgroundColor = '#e9ecef';
}

function addVariantRowUI(buttonEl, secondaryOptionName) {
    const tbody = buttonEl.previousElementSibling.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="variant-secondary-value" placeholder="ej. S, M, L..." required></td>
        <td><input type="number" class="variant-price" step="0.01" placeholder="Opcional"></td>
        <td><input type="number" class="variant-stock" step="1" required></td>
        <td class="variant-image-cell">
            <div class="variant-image-input-wrapper">
                <input type="url" class="variant-image" placeholder="URL de la imagen (opcional)" oninput="window.app.updateVariantImagePreview(this)">
                <div class="variant-image-preview">🖼️</div>
            </div>
        </td>
        <td><button type="button" class="btn-danger" onclick="this.closest('tr').remove()">×</button></td>
    `;
    tbody.appendChild(newRow);
}

function updateVariantImagePreview(inputEl) {
    const preview = inputEl.nextElementSibling;
    const url = inputEl.value;
    if (url) {
        preview.innerHTML = `<img src="${url}" style="width:100%; height:100%; object-fit:cover;">`;
    } else {
        preview.innerHTML = '🖼️';
    }
}

async function realizarPedido(event) {
    event.preventDefault();
    if (isProcessing || !currentStore || carrito.length === 0) return;

    const btn = event.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Procesando...';
    isProcessing = true;
    
    if (DEMO_MODE) {
        setTimeout(() => {
            document.getElementById('checkoutForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            mostrarNotificacion('Pedido realizado con éxito (Modo Demo)', 'success');
            isProcessing = false;
        }, 1000);
        return;
    }

    try {
        const { data: currentProducts, error: fetchError } = await supabaseClient
            .from('productos')
            .select('id, stock, nombre, variantes')
            .eq('store_id', currentStore.id)
            .in('id', [...new Set(carrito.map(item => item.id))]);

        if (fetchError) throw fetchError;

        for (const item of carrito) {
            const productDB = currentProducts.find(p => p.id === item.id);
            if (!productDB) {
                throw new Error(`El producto "${item.nombre}" ya no está disponible.`);
            }
            if (productDB.stock < item.cantidad) {
                throw new Error(`No hay suficiente stock para "${item.nombre}". Disponible: ${productDB.stock}`);
            }
        }
        
        const pedidoDB = {
            cliente_nombre: document.getElementById('nombre').value,
            cliente_telefono: document.getElementById('telefono').value,
            cliente_email: document.getElementById('email').value,
            direccion: document.getElementById('direccion').value,
            productos: carrito.map(({ id, nombre, precio, cantidad, variante, imagen_url }) => ({ id, nombre, precio, cantidad, variante, imagen_url })),
            total: carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0),
            store_id: currentStore.id,
            estado: 'pendiente_pago',
            location: selectedLocation
        };

        const { data: insertedOrder, error: supabaseError } = await supabaseClient
            .from('pedidos')
            .insert([pedidoDB])
            .select()
            .single();

        if (supabaseError) throw supabaseError;

        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';

        mostrarNotificacion('Pedido realizado con éxito', 'success');

    } catch(e) {
        mostrarNotificacion(`Error al realizar pedido: ${e.message}`, 'error');
        btn.disabled = false;
        btn.textContent = 'Confirmar Pedido';
    } finally {
        isProcessing = false;
    }
}

// --- CART FUNCTIONS ---
function agregarAlCarrito(productoId, cantidad, varianteSeleccionada = null) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    let precio = producto.precio;
    let stock = producto.stock;
    let imagen_url = producto.imagen_url;
    let varianteParaGuardar = null;

    if (varianteSeleccionada) {
        precio = varianteSeleccionada.precio;
        stock = varianteSeleccionada.stock;
        imagen_url = varianteSeleccionada.imagen_url || producto.imagen_url;
        varianteParaGuardar = {
            primary: varianteSeleccionada.primary,
            secondary: varianteSeleccionada.secondary,
        }
    }

    if (stock < cantidad) {
        mostrarNotificacion('No hay suficiente stock para este producto.', 'error');
        return;
    }
    
    // Create a unique ID for the cart item based on product and variant
    const cartItemId = varianteSeleccionada 
        ? `${producto.id}-${varianteSeleccionada.primary.replace(/\s+/g, '_')}-${varianteSeleccionada.secondary.replace(/\s+/g, '_')}` 
        : `${producto.id}`;
    
    const itemExistente = carrito.find(item => item.cartItemId === cartItemId);

    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            cartItemId,
            id: producto.id,
            nombre: producto.nombre,
            marca: producto.marca,
            precio,
            cantidad,
            variante: varianteParaGuardar,
            imagen_url,
            icon: producto.icon
        });
    }

    mostrarNotificacion(`${producto.nombre} añadido al carrito`, 'success');
    document.querySelector('.cart-count').classList.add('pop');
    setTimeout(() => document.querySelector('.cart-count').classList.remove('pop'), 300);
    
    actualizarContadorCarrito();
    renderizarCarrito();
    document.getElementById('cartModal').style.display = 'block';
}

function renderizarCarrito() {
    const cartContent = document.getElementById('cartContent');
    if (carrito.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Tu carrito está vacío.</p>
            </div>`;
        return;
    }

    const itemsHTML = carrito.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">${item.imagen_url ? `<img src="${optimizarImagenUrl(item.imagen_url, 100)}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">` : item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nombre}</div>
                ${item.variante ? `<div class="cart-item-brand">${item.variante.primary} / ${item.variante.secondary}</div>` : `<div class="cart-item-brand">${item.marca}</div>`}
                <div class="cart-item-price">S/ ${item.precio.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="window.app.actualizarCantidad('${item.cartItemId}', ${item.cantidad - 1})">-</button>
                    <span class="qty-display">${item.cantidad}</span>
                    <button class="qty-btn" onclick="window.app.actualizarCantidad('${item.cartItemId}', ${item.cantidad + 1})">+</button>
                    <button class="remove-btn" onclick="window.app.eliminarDelCarrito('${item.cartItemId}')">Eliminar</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    cartContent.innerHTML = `
        <div id="cartItemsContainer">${itemsHTML}</div>
        <div class="cart-total">
            <span class="cart-total-label">Total:</span>
            <span class="cart-total-amount">S/ ${total.toFixed(2)}</span>
        </div>
        <div id="checkoutForm" style="margin-top:2rem;">
            <h3>Completa tus datos para finalizar</h3>
             <form onsubmit="window.app.realizarPedido(event)">
                <div class="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" id="nombre" required>
                </div>
                <div class="form-group">
                    <label>Teléfono (WhatsApp)</label>
                    <input type="tel" id="telefono" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label>Dirección de Entrega</label>
                    <div class="address-input-group">
                         <input type="text" id="direccion" required placeholder="Escribe tu dirección o usa el GPS">
                         <button type="button" class="btn-gps" id="gpsBtn" onclick="window.app.obtenerUbicacion()">📍</button>
                    </div>
                    <div id="map" style="height: 200px; margin-top: 1rem; display: none; border-radius: 10px;"></div>
                </div>
                <button type="submit" class="btn-primary">Confirmar Pedido</button>
            </form>
        </div>
    `;
}

function actualizarCantidad(cartItemId, nuevaCantidad) {
    const item = carrito.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(cartItemId);
    } else {
        item.cantidad = nuevaCantidad;
        renderizarCarrito();
        actualizarContadorCarrito();
    }
}

function eliminarDelCarrito(cartItemId) {
    carrito = carrito.filter(i => i.cartItemId !== cartItemId);
    renderizarCarrito();
    actualizarContadorCarrito();
}

function cerrarYLimpiar() {
    carrito = [];
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'block';
    renderizarCarrito();
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const count = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cartCount').textContent = count;
}


// --- PRODUCT DETAIL MODAL ---
async function mostrarDetalleProducto(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    let priceDisplay = `S/ ${parseFloat(producto.precio).toFixed(2)}`;
    let variantSelectorHTML = '';
    const hasVariants = producto.variantes && producto.variantes.groups && producto.variantes.groups.length > 0;

    if (hasVariants) {
        const allVariantPrices = producto.variantes.groups.flatMap(g => g.variants.map(v => v.precio));
        const minPrice = Math.min(...allVariantPrices.filter(p => p > 0));
        priceDisplay = `Desde S/ ${minPrice.toFixed(2)}`;

        variantSelectorHTML = `
            <div class="variant-selector" id="productVariantSelector">
                <h4>${producto.variantes.primaryOptionName || 'Opción Principal'}:</h4>
                <div class="variant-options">
                    ${producto.variantes.groups.map(group => `
                        <button class="variant-btn" data-primary="${group.primaryValue}">${group.primaryValue}</button>
                    `).join('')}
                </div>
                <div id="secondaryVariantContainer" style="display:none; margin-top:1rem;">
                    <h4>${producto.variantes.secondaryOptionName || 'Opción Secundaria'}:</h4>
                    <div class="variant-options" id="secondaryVariantOptions"></div>
                </div>
            </div>`;
    }

    const modalHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-image">
                <img id="productDetailImage" src="${optimizarImagenUrl(producto.imagen_url, 800)}" alt="${producto.nombre}">
            </div>
            <div class="product-detail-info">
                <div class="product-category">${producto.categorias ? producto.categorias.nombre : 'Sin Categoría'}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <div class="product-brand">Marca: ${producto.marca}</div>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price" id="productDetailPrice">${priceDisplay}</div>
                
                ${variantSelectorHTML}

                <div class="quantity-selector">
                    <label>Cantidad:</label>
                    <button id="detailQtyMinus">-</button>
                    <input type="number" id="detailQty" value="1" min="1">
                    <button id="detailQtyPlus">+</button>
                </div>

                <button class="btn-primary" id="detailAddToCartBtn">Agregar al Carrito</button>
            </div>
        </div>
    `;
    
    document.getElementById('productDetailContent').innerHTML = modalHTML;
    document.getElementById('productDetailModal').style.display = 'block';

    // Event listeners for quantity and add to cart
    const qtyInput = document.getElementById('detailQty');
    document.getElementById('detailQtyMinus').onclick = () => { if (qtyInput.value > 1) qtyInput.value--; };
    document.getElementById('detailQtyPlus').onclick = () => qtyInput.value++;
    
    let selectedVariant = null;

    if (hasVariants) {
        const primaryBtns = document.querySelectorAll('#productVariantSelector .variant-btn');
        const secondaryContainer = document.getElementById('secondaryVariantContainer');
        const secondaryOptions = document.getElementById('secondaryVariantOptions');
        const priceEl = document.getElementById('productDetailPrice');

        primaryBtns.forEach(btn => {
            btn.onclick = () => {
                primaryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const primaryValue = btn.dataset.primary;
                const group = producto.variantes.groups.find(g => g.primaryValue === primaryValue);
                
                secondaryOptions.innerHTML = group.variants.map(v => `
                    <button class="variant-btn secondary" data-secondary="${v.secondaryValue}" ${v.stock <= 0 ? 'disabled' : ''}>${v.secondaryValue} ${v.stock <= 0 ? '(Agotado)' : ''}</button>
                `).join('');
                secondaryContainer.style.display = 'block';
                
                document.querySelectorAll('#secondaryVariantOptions .variant-btn').forEach(sBtn => {
                    sBtn.onclick = () => {
                        document.querySelectorAll('#secondaryVariantOptions .variant-btn').forEach(b => b.classList.remove('active'));
                        sBtn.classList.add('active');
                        const secondaryValue = sBtn.dataset.secondary;
                        const variant = group.variants.find(v => v.secondaryValue === secondaryValue);
                        selectedVariant = {
                            ...variant,
                            primary: primaryValue,
                            secondary: secondaryValue,
                        };
                        priceEl.textContent = `S/ ${variant.precio.toFixed(2)}`;
                    }
                });
            }
        });
    }

    document.getElementById('detailAddToCartBtn').onclick = () => {
        if (hasVariants && !selectedVariant) {
            mostrarNotificacion('Por favor, selecciona una variante.', 'error');
            return;
        }
        agregarAlCarrito(productoId, parseInt(qtyInput.value), selectedVariant);
        cerrarDetalleProducto();
    };
}

function cerrarDetalleProducto() {
    document.getElementById('productDetailModal').style.display = 'none';
}


// --- ORDER MANAGEMENT (ADMIN) ---

async function cargarPedidosAdmin() {
    if (!currentStore) return;
    popularFiltroEstados();
    await renderizarPedidosAdmin();
}

function popularFiltroEstados() {
    const select = document.getElementById('orderStatusFilter');
    if (!select) return;
    select.innerHTML = '<option value="todos">Todos los estados</option>';
    for (const [key, value] of Object.entries(estadoPedidoConfig)) {
        select.innerHTML += `<option value="${key}">${value.nombre}</option>`;
    }
}

async function renderizarPedidosAdmin() {
    if (!currentStore) return;
    const loadingEl = document.getElementById('loadingAdminPedidos');
    if (loadingEl) loadingEl.style.display = 'block';

    try {
        let data = [];
        if (DEMO_MODE) {
            data = mockData.pedidos.filter(p => p.store_id === currentStore.id);
        } else {
            const searchTerm = document.getElementById('orderSearch').value.toLowerCase();
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;

            let query = supabaseClient.from('pedidos').select('*').eq('store_id', currentStore.id).order('created_at', { ascending: false });

            if (searchTerm) {
                query = query.or(`cliente_nombre.ilike.%${searchTerm}%,cliente_telefono.ilike.%${searchTerm}%,id::text.ilike.%${searchTerm}%`);
            }
            if (currentOrderStatusFilter !== 'todos') {
                query = query.eq('estado', currentOrderStatusFilter);
            }
            if (startDate) {
                query = query.gte('created_at', new Date(startDate).toISOString());
            }
            if (endDate) {
                const end = new Date(endDate);
                end.setHours(23, 59, 59, 999);
                query = query.lte('created_at', end.toISOString());
            }
            const { data: dbData, error } = await query;
            if (error) throw error;
            data = dbData;
        }
        
        pedidosAdmin = data;
        
        if (currentOrderView === 'list') {
            renderizarVistaListaPedidos(pedidosAdmin);
        } else {
            renderizarVistaKanbanPedidos(pedidosAdmin);
        }

    } catch (error) {
        console.error("Error al cargar pedidos:", error);
    } finally {
        if (loadingEl) loadingEl.style.display = 'none';
    }
}

function renderizarVistaListaPedidos(pedidos) {
    const tableBody = document.getElementById('adminOrdersTable');
    if (!tableBody) return;
    if (pedidos.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" class="loading">No se encontraron pedidos.</td></tr>';
        return;
    }
    tableBody.innerHTML = pedidos.map(pedido => `
        <tr onclick="window.app.abrirDetallesPedido(${pedido.id})">
            <td>
                <strong>#${pedido.id}</strong><br>
                <small>${new Date(pedido.created_at).toLocaleString('es-PE')}</small>
            </td>
            <td>${pedido.cliente_nombre}</td>
            <td>${pedido.cliente_telefono}</td>
            <td><strong>S/ ${pedido.total.toFixed(2)}</strong></td>
            <td>
                <select class="status-select ${estadoPedidoConfig[pedido.estado]?.clase || ''}" 
                        onchange="event.stopPropagation(); window.app.actualizarEstadoPedido(${pedido.id}, this.value)">
                    ${Object.entries(estadoPedidoConfig).map(([key, value]) => `
                        <option value="${key}" ${pedido.estado === key ? 'selected' : ''}>${value.nombre}</option>
                    `).join('')}
                </select>
            </td>
        </tr>
    `).join('');
}

function renderizarVistaKanbanPedidos(pedidos) {
    const kanbanBoard = document.getElementById('kanbanBoard');
    if (!kanbanBoard) return;
    kanbanBoard.innerHTML = '';

    for (const [statusKey, statusInfo] of Object.entries(estadoPedidoConfig)) {
        const column = document.createElement('div');
        column.className = 'kanban-column';
        column.dataset.status = statusKey;
        column.ondragover = (e) => e.preventDefault();
        column.ondrop = (e) => handleDrop(e);

        column.innerHTML = `
            <div class="kanban-column-header ${statusInfo.clase}">
                <h3>${statusInfo.nombre}</h3>
            </div>
            <div class="kanban-cards"></div>
        `;
        kanbanBoard.appendChild(column);
    }

    pedidos.forEach(pedido => {
        const column = kanbanBoard.querySelector(`.kanban-column[data-status="${pedido.estado}"] .kanban-cards`);
        if (column) {
            const card = document.createElement('div');
            card.className = 'kanban-card';
            card.draggable = true;
            card.dataset.pedidoId = pedido.id;
            card.onclick = () => abrirDetallesPedido(pedido.id);
            card.ondragstart = (e) => handleDragStart(e);
            card.innerHTML = `
                <div class="kanban-card-header">
                    <strong>#${pedido.id}</strong>
                    <span class="kanban-card-total">S/ ${pedido.total.toFixed(2)}</span>
                </div>
                <div class="kanban-card-cliente">${pedido.cliente_nombre}</div>
                <div class="kanban-card-fecha">${new Date(pedido.created_at).toLocaleDateString('es-PE')}</div>
            `;
            column.appendChild(card);
        }
    });
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.pedidoId);
    e.target.classList.add('dragging');
}

function handleDrop(e) {
    e.preventDefault();
    const pedidoId = e.dataTransfer.getData('text/plain');
    const column = e.target.closest('.kanban-column');
    if (column && pedidoId) {
        const nuevoEstado = column.dataset.status;
        actualizarEstadoPedido(parseInt(pedidoId), nuevoEstado);
        
        // Optimistic UI update
        const draggedCard = document.querySelector(`.kanban-card[data-pedido-id="${pedidoId}"]`);
        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            column.querySelector('.kanban-cards').appendChild(draggedCard);
        }
    }
}

async function abrirDetallesPedido(pedidoId) {
    const pedido = pedidosAdmin.find(p => p.id === pedidoId);
    if (!pedido) return;

    const contentEl = document.getElementById('orderDetailsContent');
    contentEl.innerHTML = `
        <div class="order-details-grid">
            <div class="order-details-card">
                <h4>Cliente</h4>
                <p><strong>Nombre:</strong> ${pedido.cliente_nombre}</p>
                <p><strong>Teléfono:</strong> ${pedido.cliente_telefono}</p>
                <p><strong>Email:</strong> ${pedido.cliente_email}</p>
                <p><strong>Dirección:</strong> ${pedido.direccion}</p>
            </div>
            <div class="order-details-card">
                <h4>Pedido</h4>
                <p><strong>Nº Pedido:</strong> #${pedido.id}</p>
                <p><strong>Fecha:</strong> ${new Date(pedido.created_at).toLocaleString('es-PE')}</p>
                <p><strong>Total:</strong> S/ ${pedido.total.toFixed(2)}</p>
                <p><strong>Estado:</strong> <span class="status-select ${estadoPedidoConfig[pedido.estado].clase}">${estadoPedidoConfig[pedido.estado].nombre}</span></p>
            </div>
        </div>
        <h4>Productos</h4>
        <table class="products-table">
            <thead><tr><th>Producto</th><th>Variante</th><th>Cantidad</th><th>Precio Unit.</th><th>Subtotal</th></tr></thead>
            <tbody>
                ${pedido.productos.map(p => `
                    <tr>
                        <td>${p.nombre}</td>
                        <td>${p.variante ? `${p.variante.primary} / ${p.variante.secondary}` : '-'}</td>
                        <td>${p.cantidad}</td>
                        <td>S/ ${p.precio.toFixed(2)}</td>
                        <td>S/ ${(p.cantidad * p.precio).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;

    document.getElementById('orderDetailsModal').style.display = 'block';
}

function cerrarDetallesPedido() {
    document.getElementById('orderDetailsModal').style.display = 'none';
}

async function actualizarEstadoPedido(pedidoId, nuevoEstado) {
    if (DEMO_MODE) {
        const pedido = mockData.pedidos.find(p => p.id === pedidoId && p.store_id === currentStore.id);
        if (pedido) {
            pedido.estado = nuevoEstado;
        }
        const pedidoAdmin = pedidosAdmin.find(p => p.id === pedidoId);
        if (pedidoAdmin) {
            pedidoAdmin.estado = nuevoEstado;
        }
        mostrarNotificacion(`Pedido #${pedidoId} actualizado (Modo Demo)`, 'success');
        if (currentOrderView === 'list') {
            renderizarVistaListaPedidos(pedidosAdmin);
        } else {
            renderizarVistaKanbanPedidos(pedidosAdmin);
        }
        return;
    }

    try {
        const { error } = await supabaseClient
            .from('pedidos')
            .update({ estado: nuevoEstado })
            .eq('id', pedidoId)
            .eq('store_id', currentStore.id);
        if (error) throw error;
        
        mostrarNotificacion(`Pedido #${pedidoId} actualizado a "${estadoPedidoConfig[nuevoEstado].nombre}"`, 'success');
        
        const pedidoIndex = pedidosAdmin.findIndex(p => p.id === pedidoId);
        if (pedidoIndex > -1) {
            pedidosAdmin[pedidoIndex].estado = nuevoEstado;
            // Re-render only the select to avoid full refresh if in list view
            if (currentOrderView === 'list') {
                const select = document.querySelector(`tr[onclick="window.app.abrirDetallesPedido(${pedidoId})"] select`);
                if (select) {
                    select.className = `status-select ${estadoPedidoConfig[nuevoEstado]?.clase || ''}`;
                }
            }
        }
    } catch (error) {
        console.error("Error al actualizar estado:", error);
        mostrarNotificacion('Error al actualizar estado del pedido', 'error');
        renderizarPedidosAdmin(); // Re-render to revert optimistic update on failure
    }
}

function cambiarVistaPedidos(vista) {
    currentOrderView = vista;
    document.getElementById('orderListView').style.display = vista === 'list' ? 'block' : 'none';
    document.getElementById('orderKanbanView').style.display = vista === 'kanban' ? 'block' : 'none';
    document.getElementById('btnListView').classList.toggle('active', vista === 'list');
    document.getElementById('btnKanbanView').classList.toggle('active', vista === 'kanban');
    renderizarPedidosAdmin();
}

function filtrarPedidosPorEstado(estado) {
    currentOrderStatusFilter = estado;
    document.getElementById('orderStatusFilter').className = `status-select ${estadoPedidoConfig[estado]?.clase || ''}`;
    renderizarPedidosAdmin();
}

function resetearFiltrosPedidos() {
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('orderSearch').value = '';
    document.getElementById('orderStatusFilter').value = 'todos';
    currentOrderStatusFilter = 'todos';
    renderizarPedidosAdmin();
}

async function exportarPedidosExcel() {
    if (pedidosAdmin.length === 0) {
        mostrarNotificacion('No hay pedidos para exportar.', 'error');
        return;
    }
    const data = pedidosAdmin.map(p => ({
        'ID Pedido': p.id,
        'Fecha': new Date(p.created_at).toLocaleString('es-PE'),
        'Cliente': p.cliente_nombre,
        'Teléfono': p.cliente_telefono,
        'Email': p.cliente_email,
        'Dirección': p.direccion,
        'Total': p.total,
        'Estado': estadoPedidoConfig[p.estado].nombre,
        'Productos': p.productos.map(item => `${item.nombre} (x${item.cantidad})`).join(', ')
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Pedidos');
    XLSX.writeFile(wb, `pedidos_${currentStore.slug}_${new Date().toISOString().split('T')[0]}.xlsx`);
    mostrarNotificacion('Pedidos exportados a Excel.', 'success');
}

async function suscribirACambiosPedidos() {
    if (DEMO_MODE) return;
    if (pedidosChannel) {
        supabaseClient.removeChannel(pedidosChannel);
    }
    pedidosChannel = supabaseClient.channel('public:pedidos')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'pedidos' }, payload => {
            if (payload.new.store_id === currentStore.id) {
                mostrarNotificacion('Nuevo pedido o actualización recibida.', 'info');
                renderizarPedidosAdmin();
                renderizarDashboard();
            }
        })
        .subscribe();
}

// --- CUSTOMER MANAGEMENT (ADMIN) ---

async function renderizarClientes() {
    if (!currentStore) return;
    const loadingEl = document.getElementById('loadingAdminClients');
    if (loadingEl) loadingEl.style.display = 'block';
    const tableBody = document.getElementById('adminClientsTable');
    tableBody.innerHTML = '';
    
    try {
        let data = [];
        if (DEMO_MODE) {
            data = mockData.pedidos.filter(p => p.store_id === currentStore.id);
        } else {
            const { data: dbData, error } = await supabaseClient
                .from('pedidos')
                .select('*')
                .eq('store_id', currentStore.id)
                .order('created_at', { ascending: false });
            if (error) throw error;
            data = dbData;
        }
        
        clientesMap.clear();
        data.forEach(pedido => {
            const tel = pedido.cliente_telefono;
            if (!tel) return;

            if (!clientesMap.has(tel)) {
                clientesMap.set(tel, {
                    nombre: pedido.cliente_nombre,
                    email: pedido.cliente_email,
                    telefono: tel,
                    numPedidos: 0,
                    gastoTotal: 0,
                    ultimoPedido: new Date(0)
                });
            }

            const cliente = clientesMap.get(tel);
            cliente.numPedidos++;
            cliente.gastoTotal += pedido.total;
            const fechaPedido = new Date(pedido.created_at);
            if (fechaPedido > cliente.ultimoPedido) {
                cliente.ultimoPedido = fechaPedido;
                cliente.nombre = pedido.cliente_nombre;
                cliente.email = pedido.cliente_email;
            }
        });
        
        const searchTerm = document.getElementById('clientSearch').value.toLowerCase();
        let clientesFiltrados = Array.from(clientesMap.values());

        if (searchTerm) {
            clientesFiltrados = clientesFiltrados.filter(c => 
                c.nombre.toLowerCase().includes(searchTerm) ||
                c.telefono.toLowerCase().includes(searchTerm) ||
                (c.email && c.email.toLowerCase().includes(searchTerm))
            );
        }

        if (clientesFiltrados.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="loading">No se encontraron clientes.</td></tr>';
            return;
        }

        tableBody.innerHTML = clientesFiltrados.map(c => `
            <tr onclick="window.app.abrirHistorialCliente('${c.telefono}')">
                <td>${c.nombre}</td>
                <td>${c.telefono}</td>
                <td>${c.email || '-'}</td>
                <td>${c.numPedidos}</td>
                <td>S/ ${c.gastoTotal.toFixed(2)}</td>
                <td>${c.ultimoPedido.toLocaleDateString('es-PE')}</td>
            </tr>
        `).join('');

    } catch (e) {
        console.error("Error rendering clients:", e);
        tableBody.innerHTML = '<tr><td colspan="6" style="color:var(--danger)">Error al cargar clientes.</td></tr>';
    } finally {
        if (loadingEl) loadingEl.style.display = 'none';
    }
}

async function abrirHistorialCliente(telefono) {
    let pedidosCliente = [];
    if (DEMO_MODE) {
        pedidosCliente = mockData.pedidos.filter(p => p.cliente_telefono === telefono && p.store_id === currentStore.id);
    } else {
        const { data, error } = await supabaseClient
            .from('pedidos')
            .select('*')
            .eq('store_id', currentStore.id)
            .eq('cliente_telefono', telefono)
            .order('created_at', { ascending: false });
        if (error) {
            mostrarNotificacion('Error al cargar historial', 'error');
            return;
        }
        pedidosCliente = data;
    }
    
    const cliente = clientesMap.get(telefono);
    document.getElementById('clientHistoryTitle').textContent = `Historial de ${cliente.nombre}`;
    const contentEl = document.getElementById('clientHistoryContent');

    contentEl.innerHTML = `
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${cliente.email || '-'}</p>
        <p style="margin-bottom: 1.5rem;"><strong>Total gastado:</strong> S/ ${cliente.gastoTotal.toFixed(2)} en ${cliente.numPedidos} pedidos.</p>
        <table class="products-table">
            <thead><tr><th>Nº Pedido</th><th>Fecha</th><th>Total</th><th>Estado</th></tr></thead>
            <tbody>
                ${pedidosCliente.map(p => `
                    <tr onclick="window.app.abrirDetallesPedido(${p.id})">
                        <td>#${p.id}</td>
                        <td>${new Date(p.created_at).toLocaleString('es-PE')}</td>
                        <td>S/ ${p.total.toFixed(2)}</td>
                        <td><span class="status-select ${estadoPedidoConfig[p.estado].clase}">${estadoPedidoConfig[p.estado].nombre}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('clientHistoryModal').style.display = 'block';
}

function cerrarHistorialCliente() {
    document.getElementById('clientHistoryModal').style.display = 'none';
}

function exportarClientesExcel() {
    const clientes = Array.from(clientesMap.values());
    if (clientes.length === 0) {
        mostrarNotificacion('No hay clientes para exportar', 'error');
        return;
    }
    const data = clientes.map(c => ({
        'Nombre': c.nombre,
        'Teléfono': c.telefono,
        'Email': c.email,
        'Nº Pedidos': c.numPedidos,
        'Gasto Total': c.gastoTotal,
        'Último Pedido': c.ultimoPedido.toLocaleDateString('es-PE')
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
    XLSX.writeFile(wb, `clientes_${currentStore.slug}_${new Date().toISOString().split('T')[0]}.xlsx`);
    mostrarNotificacion('Clientes exportados a Excel', 'success');
}

// --- DESIGN PANEL FUNCTIONS ---

function inicializarPanelDiseno() {
    if (!currentStore || !currentStore.design_settings) return;
    const settings = currentStore.design_settings;
    
    // Set template
    document.querySelectorAll('input[name="template"]').forEach(radio => {
        radio.checked = radio.value === settings.template;
        const card = document.getElementById(`templateCard-${radio.value}`);
        if(card) card.classList.toggle('selected', radio.checked);
    });

    // Set colors
    document.getElementById('colorPrimario').value = settings.colors.primary;
    document.getElementById('colorSecundario').value = settings.colors.secondary;
    document.getElementById('colorFondo').value = settings.colors.background;
    document.getElementById('colorTexto').value = settings.colors.text;
    
    // Set fonts
    document.getElementById('fontHeadings').value = settings.fonts.headings;
    document.getElementById('fontBody').value = settings.fonts.body;
}

function aplicarEstilosEnVivo() {
    // Read current values from the form
    const template = document.querySelector('input[name="template"]:checked').value;
    const colors = {
        primary: document.getElementById('colorPrimario').value,
        secondary: document.getElementById('colorSecundario').value,
        background: document.getElementById('colorFondo').value,
        text: document.getElementById('colorTexto').value,
    };
    const fonts = {
        headings: document.getElementById('fontHeadings').value,
        body: document.getElementById('fontBody').value,
    };

    // Apply template class
    const body = document.getElementById('storeBody');
    body.className = `template-${template}`;
    
    // Update selected visual state for template cards
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.toggle('selected', card.id.includes(template));
    });

    // Apply colors and fonts via CSS variables
    const styleId = 'dynamic-store-styles';
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
    }
    
    styleEl.innerHTML = `
        :root {
            --primary: ${colors.primary};
            --secondary: ${colors.secondary};
            --accent: ${colors.secondary};
            --light: ${colors.background};
            --text-dark: ${colors.text};
            --font-headings: ${fonts.headings};
            --font-body: ${fonts.body};
        }
    `;
}

function guardarCambiosDiseno() {
    if (!currentStore) return;
    
    const newSettings = {
        template: document.querySelector('input[name="template"]:checked').value,
        colors: {
            primary: document.getElementById('colorPrimario').value,
            secondary: document.getElementById('colorSecundario').value,
            background: document.getElementById('colorFondo').value,
            text: document.getElementById('colorTexto').value,
        },
        fonts: {
            headings: document.getElementById('fontHeadings').value,
            body: document.getElementById('fontBody').value,
        }
    };
    
    // In demo mode, update the mockData object
    currentStore.design_settings = newSettings;
    
    mostrarNotificacion('Diseño guardado con éxito (Modo Demo)', 'success');
}

function restablecerDiseno() {
    // Re-initializes the panel with the last saved data, effectively discarding changes
    inicializarPanelDiseno();
    // Re-applies the restored styles to the live preview
    aplicarEstilosEnVivo();
    mostrarNotificacion('Cambios restablecidos a la última versión guardada.', 'info');
}

// --- DASHBOARD HELPERS ---
function setDashboardDateRange(range) {
    const endDateInput = document.getElementById('dashboardEndDate');
    const startDateInput = document.getElementById('dashboardStartDate');
    
    if (!endDateInput || !startDateInput) return;

    const today = new Date();
    let startDate = new Date();

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    if (range === 'today') {
        startDate = today;
    } else if (range === 'week') {
        startDate.setDate(today.getDate() - 6);
    } else if (range === 'month') {
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    }
    
    endDateInput.value = formatDate(today);
    startDateInput.value = formatDate(startDate);

    renderizarDashboard();
}

async function renderizarDashboard() {
    const startDateInput = document.getElementById('dashboardStartDate');
    const endDateInput = document.getElementById('dashboardEndDate');

    if (!startDateInput.value || !endDateInput.value) {
        const today = new Date();
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        
        const formatDate = (date) => date.toISOString().split('T')[0];

        startDateInput.value = formatDate(firstDayOfMonth);
        endDateInput.value = formatDate(today);
    }

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    endDate.setHours(23, 59, 59, 999);
    
    document.getElementById('kpiIngresosTotales').textContent = '...';
    document.getElementById('kpiIngresosPendientes').textContent = '...';
    document.getElementById('kpiPedidosTotales').textContent = '...';
    document.getElementById('kpiTicketPromedio').textContent = '...';
    document.getElementById('topProductsWidget').innerHTML = `<div class="loading">Cargando...</div>`;
    document.getElementById('topClientsWidget').innerHTML = `<div class="loading">Cargando...</div>`;
    
    if (!currentStore) return;

    try {
        let pedidos = [];
        if (DEMO_MODE) {
            pedidos = mockData.pedidos.filter(p => {
                const pDate = new Date(p.created_at);
                return p.store_id === currentStore.id && pDate >= startDate && pDate <= endDate;
            });
        } else {
            const { data, error } = await supabaseClient
                .from('pedidos')
                .select('total, estado, created_at, cliente_nombre, productos')
                .eq('store_id', currentStore.id)
                .gte('created_at', startDate.toISOString())
                .lte('created_at', endDate.toISOString());
            if (error) throw error;
            pedidos = data;
        }

        if (!pedidos || pedidos.length === 0) {
            document.getElementById('kpiIngresosTotales').textContent = 'S/ 0.00';
            document.getElementById('kpiIngresosPendientes').textContent = 'S/ 0.00';
            document.getElementById('kpiPedidosTotales').textContent = '0';
            document.getElementById('kpiTicketPromedio').textContent = 'S/ 0.00';
            document.getElementById('topProductsWidget').innerHTML = '<p>No hay datos para este período.</p>';
            document.getElementById('topClientsWidget').innerHTML = '<p>No hay datos para este período.</p>';
            if (salesChartInstance) {
                salesChartInstance.destroy();
                salesChartInstance = null;
            }
            const ctx = document.getElementById('salesChart').getContext('2d');
            salesChartInstance = new Chart(ctx, {
                type: 'line',
                data: { labels: [], datasets: [] },
                options: { plugins: { title: { display: true, text: 'No hay datos de ventas para mostrar.' } } }
            });
            return;
        }

        let ingresosTotales = 0;
        let ingresosPendientes = 0;
        const pedidosPagados = [];
        const topProductos = new Map();
        const topClientes = new Map();
        const ventasPorDia = new Map();

        pedidos.forEach(pedido => {
            if (pedido.estado !== 'cancelado') {
                 if (pedido.estado === 'pendiente_pago') {
                    ingresosPendientes += pedido.total;
                } else {
                    ingresosTotales += pedido.total;
                    pedidosPagados.push(pedido);
                }

                (pedido.productos || []).forEach(p => {
                    const existing = topProductos.get(p.nombre) || { cantidad: 0, ingresos: 0 };
                    topProductos.set(p.nombre, {
                        cantidad: existing.cantidad + p.cantidad,
                        ingresos: existing.ingresos + (p.precio * p.cantidad)
                    });
                });

                const cliente = pedido.cliente_nombre || 'Anónimo';
                const existingClient = topClientes.get(cliente) || { pedidos: 0, gasto: 0 };
                topClientes.set(cliente, {
                    pedidos: existingClient.pedidos + 1,
                    gasto: existingClient.gasto + pedido.total
                });

                if (pedido.estado !== 'pendiente_pago') {
                    const fecha = new Date(pedido.created_at).toISOString().split('T')[0];
                    ventasPorDia.set(fecha, (ventasPorDia.get(fecha) || 0) + pedido.total);
                }
            }
        });

        const pedidosTotales = pedidos.filter(p => p.estado !== 'cancelado').length;
        const ticketPromedio = pedidosPagados.length > 0 ? ingresosTotales / pedidosPagados.length : 0;
        
        document.getElementById('kpiIngresosTotales').textContent = `S/ ${ingresosTotales.toFixed(2)}`;
        document.getElementById('kpiIngresosPendientes').textContent = `S/ ${ingresosPendientes.toFixed(2)}`;
        document.getElementById('kpiPedidosTotales').textContent = pedidosTotales;
        document.getElementById('kpiTicketPromedio').textContent = `S/ ${ticketPromedio.toFixed(2)}`;
        
        const sortedProducts = [...topProductos.entries()].sort((a, b) => b[1].cantidad - a[1].cantidad).slice(0, 5);
        document.getElementById('topProductsWidget').innerHTML = sortedProducts.map(([nombre, data], index) => `
            <li class="top-item">
                <span class="top-item-rank">${index + 1}</span>
                <div class="top-item-info">
                    <span class="top-item-name">${nombre}</span>
                    <span class="top-item-metric">${data.cantidad} vendidos | S/ ${data.ingresos.toFixed(2)}</span>
                </div>
            </li>
        `).join('') || '<p>No hay datos.</p>';

        const sortedClients = [...topClientes.entries()].sort((a, b) => b[1].gasto - a[1].gasto).slice(0, 5);
        document.getElementById('topClientsWidget').innerHTML = sortedClients.map(([nombre, data], index) => `
             <li class="top-item">
                <span class="top-item-rank">${index + 1}</span>
                <div class="top-item-info">
                    <span class="top-item-name">${nombre}</span>
                    <span class="top-item-metric">${data.pedidos} pedidos | S/ ${data.gasto.toFixed(2)}</span>
                </div>
            </li>
        `).join('') || '<p>No hay datos.</p>';

        if (salesChartInstance) {
            salesChartInstance.destroy();
        }

        const chartLabels = [];
        const chartData = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dateString = currentDate.toISOString().split('T')[0];
            chartLabels.push(new Date(dateString).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }));
            chartData.push(ventasPorDia.get(dateString) || 0);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        const ctx = document.getElementById('salesChart').getContext('2d');
        salesChartInstance = new Chart(ctx, {
            type: currentChartType,
            data: {
                labels: chartLabels,
                datasets: [{
                    label: 'Ingresos',
                    data: chartData,
                    borderColor: 'rgba(123, 92, 126, 1)',
                    backgroundColor: 'rgba(123, 92, 126, 0.2)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(123, 92, 126, 1)',
                    pointRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, ticks: { callback: value => `S/ ${value}` } }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: context => `Ingresos: ${new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(context.parsed.y)}`
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error rendering dashboard:", error);
        document.getElementById('topProductsWidget').innerHTML = `<p style="color:var(--danger)">Error al cargar datos.</p>`;
        document.getElementById('topClientsWidget').innerHTML = `<p style="color:var(--danger)">Error al cargar datos.</p>`;
    }
}

function descargarPlantillaExcel() {
    const data = [
        ['nombre', 'marca', 'categoria_id', 'precio', 'stock', 'descripcion', 'imagen_url', 'activo', 'badge', 'icon'],
        ['Laptop Gamer X1', 'TechPro', 1, 4500.50, 15, 'Laptop potente para juegos', 'https://example.com/laptop.jpg', true, 'Nuevo', '💻']
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Set column widths for better readability
    ws['!cols'] = [
        { wch: 30 }, // nombre
        { wch: 20 }, // marca
        { wch: 12 }, // categoria_id
        { wch: 10 }, // precio
        { wch: 8 },  // stock
        { wch: 40 }, // descripcion
        { wch: 40 }, // imagen_url
        { wch: 8 },  // activo
        { wch: 15 }, // badge
        { wch: 8 }   // icon
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'PlantillaProductos');

    XLSX.writeFile(wb, 'plantilla_productos.xlsx');
    mostrarNotificacion('Plantilla de Excel descargada.', 'success');
}

async function importarProductos(event) {
    const file = event.target.files[0];
    if (!file || !currentStore) return;

    if (DEMO_MODE) {
        mostrarNotificacion('La importación está desactivada en Modo Demo.', 'info');
        event.target.value = '';
        return;
    }

    mostrarNotificacion('Leyendo archivo...', 'info');

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            if (jsonData.length === 0) {
                mostrarNotificacion('El archivo Excel está vacío.', 'error');
                return;
            }

            productosParaImportar = [];
            
            const previewTableBody = document.getElementById('importPreviewTableBody');
            previewTableBody.innerHTML = '';
            let validCount = 0;
            let invalidCount = 0;

            const categoriaIds = new Set(categorias.map(c => c.id));

            for (const row of jsonData) {
                const producto = { ...row };
                let status = 'OK';
                let comentarios = [];

                if (!producto.nombre || String(producto.nombre).trim() === '') {
                    comentarios.push('Falta el nombre.');
                }
                if (producto.categoria_id === undefined || producto.categoria_id === null) {
                    comentarios.push('Falta categoria_id.');
                } else if (!categoriaIds.has(Number(producto.categoria_id))) {
                    comentarios.push(`ID de categoría '${producto.categoria_id}' no es válido.`);
                }
                if (producto.precio === undefined || isNaN(parseFloat(producto.precio))) {
                    comentarios.push('Precio no es un número válido.');
                }
                if (producto.stock === undefined || isNaN(parseInt(producto.stock))) {
                    comentarios.push('Stock no es un número válido.');
                }

                if (comentarios.length > 0) {
                    status = 'Error';
                    invalidCount++;
                } else {
                    validCount++;
                    productosParaImportar.push({
                        nombre: String(producto.nombre).trim(),
                        marca: producto.marca ? String(producto.marca).trim() : 'Genérico',
                        categoria_id: Number(producto.categoria_id),
                        precio: parseFloat(producto.precio),
                        stock: parseInt(producto.stock),
                        descripcion: producto.descripcion ? String(producto.descripcion) : 'Sin descripción.',
                        imagen_url: producto.imagen_url || null,
                        activo: producto.activo === 'false' || producto.activo === false ? false : true,
                        badge: producto.badge || null,
                        icon: producto.icon || '📦',
                        store_id: currentStore.id
                    });
                }
                
                const categoriaNombre = categorias.find(c => c.id === Number(producto.categoria_id))?.nombre || 'Desconocida';

                const rowHtml = `
                    <tr class="${status === 'Error' ? 'import-error' : ''}">
                        <td>${producto.nombre || '---'}</td>
                        <td>${producto.marca || '---'}</td>
                        <td>${categoriaNombre} (ID: ${producto.categoria_id || '---'})</td>
                        <td>${producto.precio || '---'}</td>
                        <td>${producto.stock || '---'}</td>
                        <td class="${status === 'Error' ? 'status-cell-error' : 'status-cell-ok'}">${status}</td>
                        <td>${comentarios.join(', ')}</td>
                    </tr>
                `;
                previewTableBody.innerHTML += rowHtml;
            }

            document.getElementById('importSummary').innerHTML = `
                <p><strong>Resumen:</strong> Se encontraron ${jsonData.length} productos en el archivo.</p>
                <p style="color: #15803d;"><strong>${validCount} productos listos para importar.</strong></p>
                <p style="color: #991b1b;"><strong>${invalidCount} productos con errores.</strong></p>
                <p>Los productos con errores no se importarán. Por favor, corríjalos en el archivo y vuelva a intentarlo.</p>
            `;

            const confirmBtn = document.getElementById('confirmImportBtn');
            if (validCount > 0) {
                confirmBtn.disabled = false;
                confirmBtn.textContent = `Confirmar Importación (${validCount} productos)`;
            } else {
                confirmBtn.disabled = true;
                confirmBtn.textContent = 'No hay productos para importar';
            }

            document.getElementById('importPreviewModal').style.display = 'block';
        } catch (error) {
            console.error("Error processing Excel file:", error);
            mostrarNotificacion('Error al procesar el archivo. Asegúrate que tiene el formato correcto.', 'error');
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsArrayBuffer(file);
}

function renderizarListaCategoriasImportacion() {
    const list = document.getElementById('import-categories-list');
    if (!list) return;
    if (categorias.length > 0) {
        list.innerHTML = categorias.map(c => `<li><strong>${c.id}</strong>: ${c.nombre}</li>`).join('');
    } else {
        list.innerHTML = '<li>No hay categorías creadas.</li>';
    }
}

function cerrarModalPrevisualizacion() {
    document.getElementById('importPreviewModal').style.display = 'none';
    productosParaImportar = [];
}

async function confirmarImportacionProductos() {
    if (productosParaImportar.length === 0 || !currentStore) {
        mostrarNotificacion('No hay productos válidos para importar.', 'error');
        return;
    }

    const confirmBtn = document.getElementById('confirmImportBtn');
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Importando...';

    try {
        const { error } = await supabaseClient
            .from('productos')
            .insert(productosParaImportar);

        if (error) throw error;

        mostrarNotificacion(`${productosParaImportar.length} productos importados con éxito.`, 'success');
        cerrarModalPrevisualizacion();
        await cargarProductosAdmin();
        await cargarProductos();
    } catch (error) {
        console.error('Error al importar productos:', error);
        mostrarNotificacion(`Error al importar: ${error.message}`, 'error');
        confirmBtn.disabled = false;
        confirmBtn.textContent = `Reintentar Importación (${productosParaImportar.length} productos)`;
    }
}

// --- UTILITY & HELPER FUNCTIONS ---
function formatSupabaseError(error) {
    if (!error) return 'Ocurrió un error desconocido.';
    if (typeof error === 'string') return error;

    const parts = [];
    if (error.message) parts.push(`Mensaje: ${error.message}`);
    if (error.details) parts.push(`Detalles: ${error.details}`);
    if (error.hint) parts.push(`Sugerencia: ${error.hint}`);
    if (error.code) parts.push(`Código: ${error.code}`);

    if (parts.length > 0) {
        return parts.join('\n');
    }

    try {
        const jsonString = JSON.stringify(error, null, 2);
        if (jsonString !== '{}') {
            return jsonString;
        }
    } catch (e) { /* Fall through */ }

    if (error.toString && error.toString() !== '[object Object]') {
        return error.toString();
    }

    return 'No se pudo mostrar el detalle del error. Revisa la consola del navegador para más información.';
}

function mostrarNotificacion(mensaje, type = 'success') {
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed; top: 100px; right: 20px; z-index: 10000;
        background: ${type === 'error' ? 'var(--danger)' : 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)'};
        color: white; padding: 1rem 2rem; border-radius: 10px; box-shadow: var(--shadow);
        font-weight: 600; transform: translateX(calc(100% + 20px)); transition: transform 0.4s ease-in-out;`;
    document.body.appendChild(notif);
    setTimeout(() => { notif.style.transform = 'translateX(0)'; }, 10);
    setTimeout(() => {
        notif.style.transform = 'translateX(calc(100% + 20px))';
        notif.addEventListener('transitionend', () => notif.remove());
    }, 4000);
}

function optimizarImagenUrl(url, width = 600) {
    if (url && url.includes('res.cloudinary.com') && !url.includes('/upload/c_')) {
        const parts = url.split('/upload/');
        if (parts.length === 2) {
            return `${parts[0]}/upload/c_fill,g_auto,q_auto,f_auto,w_${width}/${parts[1]}`;
        }
    }
    return url;
}

function generarSlug(text, targetInputId) {
    const slug = text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    document.getElementById(targetInputId).value = slug;
}

function obtenerUbicacion() {
    const gpsBtn = document.getElementById('gpsBtn');
    const direccionInput = document.getElementById('direccion');
    
    if (!navigator.geolocation) {
        mostrarNotificacion('La geolocalización no es compatible con tu navegador.', 'error');
        return;
    }
    
    gpsBtn.disabled = true;
    gpsBtn.textContent = '...';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            selectedLocation = { lat: latitude, lng: longitude };
            direccionInput.value = `Ubicación GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
            mostrarNotificacion('Ubicación obtenida con éxito.', 'success');
            gpsBtn.disabled = false;
            gpsBtn.textContent = '📍';
        },
        (error) => {
            console.error("Error getting location:", error);
            mostrarNotificacion('No se pudo obtener la ubicación. Activa los permisos.', 'error');
            gpsBtn.disabled = false;
            gpsBtn.textContent = '📍';
        }
    );
}

// --- Root Admin Store CRUD ---
function openStoreModal(storeId = null) {
    const form = document.getElementById('storeAdminForm');
    form.reset();
    const modalTitle = document.getElementById('storeAdminModalTitle');
    const storeIdInput = document.getElementById('storeId');

    if (storeId) {
        modalTitle.textContent = 'Editar Tienda';
        const store = mockData.stores.find(s => s.id === storeId);
        if (store) {
            storeIdInput.value = store.id;
            document.getElementById('storeName').value = store.name;
            document.getElementById('storeSlug').value = store.slug;
            document.getElementById('storeLogo').value = store.logo_url || '';
            document.getElementById('storePrimaryColor').value = store.design_settings.colors.primary;
            document.getElementById('storeSecondaryColor').value = store.design_settings.colors.secondary;
        }
    } else {
        modalTitle.textContent = 'Crear Nueva Tienda';
        storeIdInput.value = '';
    }
    document.getElementById('storeAdminModal').style.display = 'block';
}

function closeStoreModal() {
    document.getElementById('storeAdminModal').style.display = 'none';
}

function saveStore(event) {
    event.preventDefault();
    const storeId = document.getElementById('storeId').value;
    const storeData = {
        name: document.getElementById('storeName').value,
        slug: document.getElementById('storeSlug').value,
        logo_url: document.getElementById('storeLogo').value,
        // For simplicity, we create a new design_settings object on each save
        design_settings: {
            template: 'moderna', // default
            colors: {
                primary: document.getElementById('storePrimaryColor').value,
                secondary: document.getElementById('storeSecondaryColor').value,
                background: '#ffffff', // default
                text: '#1a1a1a' // default
            },
            fonts: {
                headings: "'Poppins', sans-serif", // default
                body: "'Lato', sans-serif" // default
            }
        }
    };

    if (storeId) { // Update
        const index = mockData.stores.findIndex(s => s.id == storeId);
        if (index > -1) {
            mockData.stores[index] = { ...mockData.stores[index], ...storeData };
        }
        mostrarNotificacion('Tienda actualizada con éxito', 'success');
    } else { // Create
        const newId = mockData.stores.length > 0 ? Math.max(...mockData.stores.map(s => s.id)) + 1 : 1;
        mockData.stores.push({ id: newId, ...storeData });
        mostrarNotificacion('Tienda creada con éxito', 'success');
    }
    
    closeStoreModal();
    renderRootAdminDashboard();
}

function deleteStore(storeId) {
    if (!confirm('¿Estás seguro? Eliminar una tienda también borrará todos sus productos, categorías y pedidos. Esta acción no se puede deshacer.')) return;
    
    const index = mockData.stores.findIndex(s => s.id === storeId);
    if (index > -1) {
        mockData.stores.splice(index, 1);
        // Cascade delete mock data
        mockData.products = mockData.products.filter(p => p.store_id !== storeId);
        mockData.categories = mockData.categories.filter(c => c.store_id !== storeId);
        mockData.pedidos = mockData.pedidos.filter(o => o.store_id !== storeId);
        
        mostrarNotificacion('Tienda eliminada correctamente', 'success');
        renderRootAdminDashboard();
    } else {
        mostrarNotificacion('No se pudo encontrar la tienda para eliminar', 'error');
    }
}


// --- New Store Preview Functions ---
function openStorePreview(slug, name, index) {
    const modal = document.getElementById('storePreviewModal');
    const iframe = document.getElementById('storePreviewFrame');
    const title = document.getElementById('storePreviewTitle');
    
    if (modal && iframe && title) {
        currentPreviewIndex = index;
        title.textContent = `Vista Previa: ${name}`;
        iframe.src = `?store=${slug}`;
        modal.style.display = 'block';
        
        // Update nav buttons
        document.getElementById('prevStoreBtn').disabled = index <= 0;
        document.getElementById('nextStoreBtn').disabled = index >= mockData.stores.length - 1;
    }
}

function navigateStorePreview(direction) {
    const newIndex = currentPreviewIndex + direction;
    if (newIndex >= 0 && newIndex < mockData.stores.length) {
        const store = mockData.stores[newIndex];
        openStorePreview(store.slug, store.name, newIndex);
    }
}

function closeStorePreview() {
    const modal = document.getElementById('storePreviewModal');
    const iframe = document.getElementById('storePreviewFrame');
    
    if (modal && iframe) {
        modal.style.display = 'none';
        iframe.src = 'about:blank'; // Clear the iframe content
        currentPreviewIndex = -1;
    }
}

// --- Global App Object for HTML on-click handlers ---
window.app = {
    // Expose necessary functions to the global scope
    showStore,
    showAdmin,
    openCart: () => document.getElementById('cartModal').style.display = 'block',
    closeCart: () => document.getElementById('cartModal').style.display = 'none',
    iniciarSesion,
    cerrarSesion,
    forceLoginAndLoadStore,
    openStorePreview,
    closeStorePreview,
    navigateStorePreview,
    mostrarVistaAdmin,
    setDashboardDateRange,
    renderizarDashboard,
    descargarPlantillaExcel,
    importarProductos,
    abrirModalProducto,
    cargarProductosAdmin,
    eliminarProducto,
    abrirModalCategoria,
    cargarCategoriasAdmin,
    eliminarCategoria,
    renderizarPedidosAdmin,
    resetearFiltrosPedidos,
    exportarPedidosExcel,
    filtrarPedidosPorEstado,
    cambiarVistaPedidos,
    abrirDetallesPedido,
    actualizarEstadoPedido,
    renderizarClientes,
    exportarClientesExcel,
    abrirHistorialCliente,
    guardarProducto,
    cerrarModalProducto,
    addVariantGroupUI,
    addVariantRowUI,
    updateVariantImagePreview,
    subirImagenCloudinary,
    previewImagen,
    guardarCategoria,
    cerrarModalCategoria,
    generarSlug,
    cerrarDetallesPedido,
    cerrarDetalleProducto,
    cerrarModalPrevisualizacion,
    confirmarImportacionProductos,
    cerrarHistorialCliente,
    cerrarYLimpiar,
    quickAdd,
    mostrarDetalleProducto,
    filtrarCategoria,
    realizarPedido,
    agregarAlCarrito,
    actualizarCantidad,
    eliminarDelCarrito,
    obtenerUbicacion,
    // Root Admin Store Management
    openStoreModal,
    closeStoreModal,
    saveStore,
    deleteStore,
    // Design Panel
    inicializarPanelDiseno,
    aplicarEstilosEnVivo,
    guardarCambiosDiseno,
    restablecerDiseno,
};

window.onclick = function(event) {
    const modals = ['cartModal', 'productoModal', 'categoriaModal', 'orderDetailsModal', 'productDetailModal', 'importPreviewModal', 'clientHistoryModal', 'storePreviewModal', 'storeAdminModal'];
    modals.forEach(id => {
        const modalEl = document.getElementById(id);
        if (event.target == modalEl) {
            if (id === 'storePreviewModal') {
                window.app.closeStorePreview();
            } else if (id === 'storeAdminModal') {
                 window.app.closeStoreModal();
            } else {
                modalEl.style.display = 'none';
            }
        }
    });
}

// --- APP START ---
initializeAppSaaS();