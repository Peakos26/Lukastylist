// Portal da Consultora - Roteador e Views

// Helpers
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => r.querySelectorAll(s);

// Metadados de páginas
const PAGE_META = {
  dashboard: { title: "Dashboard", subtitle: "Visão geral do seu negócio" },
  clientes: { title: "Clientes", subtitle: "Gerencie suas clientes" },
  agenda: { title: "Agenda", subtitle: "Seus compromissos" },
  projetos: { title: "Projetos", subtitle: "Projetos em andamento" },
  consultorias: { title: "Consultorias", subtitle: "Histórico de consultorias" },
  closets: { title: "Closets", subtitle: "Armários das clientes" },
  looks: { title: "Looks", subtitle: "Looks criados" },
  coloracao: { title: "Coloração", subtitle: "Análise de coloração pessoal" },
  biotipo: { title: "Biotipo", subtitle: "Análise de biotipo corporal" },
  visagismo: { title: "Visagismo", subtitle: "Análise de visagismo" },
  compras: { title: "Compras", subtitle: "Lista de compras sugeridas" },
  viagens: { title: "Viagens", subtitle: "Looks para viagens" },
  financeiro: { title: "Financeiro", subtitle: "Gestão financeira" },
  relatorios: { title: "Relatórios", subtitle: "Relatórios e métricas" },
  ia: { title: "IA Assistant", subtitle: "Assistente inteligente" },
  marketplace: { title: "Marketplace", subtitle: "Loja de parceiros" },
  config: { title: "Configurações", subtitle: "Configurações da conta" }
};

// View stub para rotas não implementadas
function stub() {
  return `
    <div class="card">
      <div class="text-center p-8">
        <i data-lucide="wrench" style="width: 48px; height: 48px; color: var(--muted);"></i>
        <h3 class="mt-4">Em construção</h3>
        <p class="text-muted">Esta funcionalidade estará disponível em breve.</p>
      </div>
    </div>
  `;
}

// Views do Portal
const VIEWS = {
  dashboard: () => {
    const activeClients = DATA.clients.filter(c => c.status === "active").length;
    const totalLooks = DATA.looks.length;
    const todayAgenda = DATA.agenda.filter(a => a.client).length;
    
    return `
      <div class="grid grid-3 mb-6">
        <div class="card">
          <div class="flex flex-between mb-4">
            <span class="text-muted">Clientes Ativos</span>
            <i data-lucide="users" class="text-camel"></i>
          </div>
          <h2>${activeClients}</h2>
          <p class="text-muted" style="font-size: 0.85rem;">+2 este mês</p>
        </div>
        <div class="card">
          <div class="flex flex-between mb-4">
            <span class="text-muted">Looks Criados</span>
            <i data-lucide="sparkles" class="text-camel"></i>
          </div>
          <h2>${totalLooks}</h2>
          <p class="text-muted" style="font-size: 0.85rem;">+5 esta semana</p>
        </div>
        <div class="card">
          <div class="flex flex-between mb-4">
            <span class="text-muted">Agenda Hoje</span>
            <i data-lucide="calendar" class="text-camel"></i>
          </div>
          <h2>${todayAgenda}</h2>
          <p class="text-muted" style="font-size: 0.85rem;">3 consultorias</p>
        </div>
      </div>
      
      <div class="grid grid-2">
        <div class="card">
          <h3 class="mb-4">Próximos Compromissos</h3>
          ${DATA.agenda.slice(0, 3).map(item => `
            <div class="flex flex-between p-4" style="border-bottom: 1px solid var(--line);">
              <div>
                <p style="font-weight: 500;">${item.title}</p>
                <p class="text-muted" style="font-size: 0.85rem;">${item.time} · ${item.dur}min</p>
              </div>
              <span class="badge badge-info">${item.type}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="card">
          <h3 class="mb-4">Clientes Recentes</h3>
          ${DATA.clients.slice(0, 3).map(client => `
            <div class="flex flex-between p-4" style="border-bottom: 1px solid var(--line);">
              <div class="flex gap-4">
                <div style="width: 40px; height: 40px; background: var(--camel-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;">
                  ${client.initials}
                </div>
                <div>
                  <p style="font-weight: 500;">${client.name}</p>
                  <p class="text-muted" style="font-size: 0.85rem;">${client.project}</p>
                </div>
              </div>
              <span class="badge badge-success">${client.status}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },
  
  clientes: () => {
    return `
      <div class="flex flex-between mb-6">
        <div class="flex gap-4">
          <input type="text" placeholder="Buscar cliente..." style="width: 300px;">
          <select style="width: 150px;">
            <option>Todos</option>
            <option>Ativos</option>
            <option>Pendentes</option>
          </select>
        </div>
        <button class="btn btn-primary">
          <i data-lucide="plus"></i> Nova Cliente
        </button>
      </div>
      
      <div class="card">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid var(--line); text-align: left;">
              <th style="padding: 1rem;">Cliente</th>
              <th style="padding: 1rem;">Plano</th>
              <th style="padding: 1rem;">Projeto</th>
              <th style="padding: 1rem;">Progresso</th>
              <th style="padding: 1rem;">Próximo</th>
              <th style="padding: 1rem;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${DATA.clients.map(client => `
              <tr style="border-bottom: 1px solid var(--line);">
                <td style="padding: 1rem;">
                  <div class="flex gap-4">
                    <div style="width: 36px; height: 36px; background: var(--camel-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem;">
                      ${client.initials}
                    </div>
                    <div>
                      <p style="font-weight: 500;">${client.name}</p>
                      <p class="text-muted" style="font-size: 0.8rem;">${client.email}</p>
                    </div>
                  </div>
                </td>
                <td style="padding: 1rem;">${client.plan}</td>
                <td style="padding: 1rem;">${client.project}</td>
                <td style="padding: 1rem;">
                  <div style="width: 100px; height: 8px; background: var(--sand); border-radius: 4px; overflow: hidden;">
                    <div style="width: ${client.progress}%; height: 100%; background: var(--camel);"></div>
                  </div>
                  <span class="text-muted" style="font-size: 0.75rem;">${client.progress}%</span>
                </td>
                <td style="padding: 1rem;">${client.next}</td>
                <td style="padding: 1rem;">
                  <span class="badge ${client.status === 'active' ? 'badge-success' : 'badge-info'}">${client.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },
  
  agenda: () => {
    return `
      <div class="flex flex-between mb-6">
        <div class="flex gap-4">
          <button class="btn btn-secondary">
            <i data-lucide="chevron-left"></i>
          </button>
          <h3 style="align-self: center;">Julho 2026</h3>
          <button class="btn btn-secondary">
            <i data-lucide="chevron-right"></i>
          </button>
        </div>
        <button class="btn btn-primary">
          <i data-lucide="plus"></i> Novo Evento
        </button>
      </div>
      
      <div class="card">
        ${DATA.agenda.map(item => `
          <div class="flex gap-4 p-4" style="border-bottom: 1px solid var(--line);">
            <div style="min-width: 80px; text-align: center;">
              <p style="font-weight: 600; color: var(--camel);">${item.time}</p>
              <p class="text-muted" style="font-size: 0.8rem;">${item.dur}min</p>
            </div>
            <div style="flex: 1;">
              <p style="font-weight: 500;">${item.title}</p>
              <div class="flex gap-2 mt-2">
                <span class="badge badge-info">${item.type}</span>
                <span class="badge badge-gold">${item.tag}</span>
              </div>
            </div>
            ${item.client ? `
              <div class="flex gap-4">
                <div style="width: 36px; height: 36px; background: var(--camel-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem;">
                  ${DATA.clients.find(c => c.id === item.client)?.initials || '?'}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  },
  
  closets: () => {
    return `
      <div class="flex flex-between mb-6">
        <div class="flex gap-4">
          <select style="width: 200px;">
            <option>Todas as clientes</option>
            ${DATA.clients.map(c => `<option>${c.name}</option>`).join('')}
          </select>
          <select style="width: 150px;">
            <option>Todas categorias</option>
            <option>Blazers</option>
            <option>Calças</option>
            <option>Blusas</option>
          </select>
        </div>
        <button class="btn btn-primary">
          <i data-lucide="plus"></i> Nova Peça
        </button>
      </div>
      
      <div class="grid grid-4">
        ${DATA.closet.map(item => `
          <div class="card" style="padding: 1rem; cursor: pointer;">
            <div style="width: 100%; height: 120px; background: ${item.bg}; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 3rem; margin-bottom: 0.75rem;">
              ${item.emoji}
            </div>
            <p style="font-weight: 500; font-size: 0.9rem;">${item.name}</p>
            <p class="text-muted" style="font-size: 0.8rem;">${item.brand} · ${item.cat}</p>
            <div class="flex flex-between mt-2">
              <span class="badge badge-gold">${item.uses} usos</span>
              ${item.fav ? '<i data-lucide="heart" style="width: 16px; color: var(--danger);"></i>' : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },
  
  looks: () => {
    return `
      <div class="flex flex-between mb-6">
        <div class="flex gap-4">
          <select style="width: 200px;">
            <option>Todas as clientes</option>
            ${DATA.clients.map(c => `<option>${c.name}</option>`).join('')}
          </select>
          <select style="width: 150px;">
            <option>Todas ocasiões</option>
            <option>Trabalho</option>
            <option>Casual</option>
            <option>Evento</option>
          </select>
        </div>
        <button class="btn btn-primary">
          <i data-lucide="plus"></i> Novo Look
        </button>
      </div>
      
      <div class="grid grid-3">
        ${DATA.looks.map(look => {
          const client = DATA.clients.find(c => c.id === look.client);
          return `
            <div class="card">
              <div style="width: 100%; height: 180px; background: var(--sand); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <i data-lucide="image" style="width: 48px; height: 48px; color: var(--muted);"></i>
              </div>
              <p style="font-weight: 500;">${look.name}</p>
              <p class="text-muted" style="font-size: 0.85rem;">${client?.name || 'N/A'} · ${look.occasion}</p>
              <div class="flex flex-between mt-4">
                <span class="badge ${look.approved ? 'badge-success' : 'badge-info'}">${look.approved ? 'Aprovado' : 'Pendente'}</span>
                <div class="flex gap-2">
                  <button class="btn btn-secondary" style="padding: 0.5rem;">
                    <i data-lucide="edit-2" style="width: 16px;"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },
  
  projetos: stub,
  consultorias: stub,
  coloracao: stub,
  biotipo: stub,
  visagismo: stub,
  compras: stub,
  viagens: stub,
  financeiro: stub,
  relatorios: stub,
  ia: stub,
  marketplace: stub,
  config: stub
};

// Roteador
function go(route) {
  const meta = PAGE_META[route] || { title: route, subtitle: "" };
  
  // Atualizar título
  $('#pageTitle').textContent = meta.title;
  $('#pageSubtitle').textContent = meta.subtitle;
  
  // Marcar item ativo na sidebar
  $$('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.route === route) {
      item.classList.add('active');
    }
  });
  
  // Renderizar view
  const viewFn = VIEWS[route] || stub;
  $('#mainContent').innerHTML = viewFn();
  
  // Re-renderizar ícones
  lucide.createIcons();
}

// Renderizar sidebar
function renderSidebar() {
  const sidebar = $('#sidebar');
  sidebar.innerHTML = NAV.map(group => `
    <div class="nav-group">
      <p class="nav-group-label">${group.group}</p>
      ${group.items.map(item => `
        <button class="nav-item" data-route="${item.id}" onclick="go('${item.id}')">
          <i data-lucide="${item.icon}"></i>
          <span>${item.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
  
  lucide.createIcons();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  go('dashboard');
});
