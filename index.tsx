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
let realUser = null; // For Super Admin impersonation
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
    tableBody.innerHTML = mockData.stores.map((store) => {
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
                        <button class="btn-secondary" data-action="manage" data-slug="${store.slug}">Administrar</button>
                        <button class="btn-edit" data-action="edit" data-id="${store.id}">Editar</button>
                        <button class="btn-danger" data-action="delete" data-id="${store.id}">Eliminar</button>
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
        ${currentStore.logo_url ? `<img src="${currentStore.logo_url}" alt="${currentStore.name}" style="height: 50px