function getDefaultCrudRoutes(name, optsParam) {
  const opts = Object.assign({ add: true, edit: true }, optsParam || {});
  const index =  '/' + name;
  return {
    index,
    ...(opts.add && {
      add: index + '/add'
    }),
    ...(opts.edit && {
      edit: (path) => index + '/edit/' + path
    })
  };
}

const ROUTES = {
  auth: {
    signin: '/auth/signin',
    forgot: '/auth/forgot',
    signup: '/auth/signup',
    reset: (token) => '/auth/signin/' + token
  },
  linkOrganizers: getDefaultCrudRoutes('vincular-organizadores'),
  myTickets: '/dashboard/myTickets',
  ticketValidation: '/dashboard/validacao-de-ingressos',
  purchasers: '/dashboard/compradores',
  myEvents: getDefaultCrudRoutes('meus-eventos'),
  pdv: getDefaultCrudRoutes('pontos-de-venda'),
  configPrinters: '/dashboard/configurar-impressora',
  admins: getDefaultCrudRoutes('administradores-e-auditores'),
  settings: {
    index:  '/settings',
    crud: false
  },
  home: '/',
  institutional: '/institucional',
  logo: '/logomarca',
  payment: (eventId, eventCheckoutId) =>
    `/evento/${eventId}/pagamento/${eventCheckoutId}`,
  paymentSuccess: (eventId, eventCheckoutId) =>
    `/evento/${eventId}/pagamento/${eventCheckoutId}/concluido`,
  eventDetails: (eventId) => `/evento/${eventId}`,
  userProfile: '/usuario/perfil',
  changePassword: '/usuario/alterar-senha',
  userEvents: '/dashboard/meus-eventos',
  dashboard: '/dashboard',
  pdvSaleReport: '/dashboard/relatorio-venda-pdv',
  canceledSaleReport: '/dashboard/relatorio-cancelamento-de-ingressos',
  salesPerDayReport: '/dashboard/relatorio-vendas-por-dia',
  awaitingPaymentConfirmation: (eventId, eventCheckoutId) =>
    `/evento/${eventId}/pagamento/${eventCheckoutId}/aguardandoPagamento`,
  paymentTypeReport: '/dashboard/relatorio-pagamento',
  ticketClassReport: '/dashboard/relatorio-classe-de-ingresso',
  sales: '/dashboard/relatorio-de-vendas',
  Login: '/Login'
};

export default ROUTES;

