function list(clients) {
    return clients.map(client => `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>
    `).join('');
  }
  
  function order(clients, property) {
    return clients.slice().sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  function info(index) {
    return clients.find(client => client.index === index);
  }
  
  function search(query) {
    const lowercase = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowercase));
  }
  