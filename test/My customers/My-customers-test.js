module.exports={
before: function(client){
    console.log('before: Abriendo el navegador')
    client
    .url('https://ccp-next-dev.softwareone.cloud/')
    .maximizeWindow()
},

after:function(client){
    console.log('after: Cerrando el navegador')
    client.end()
},

beforeEach:function(){
    console.log('beforeEach: Ejecutando step')
},

afterEach: function(){
    console.log('afterEach: Step ejecutado!')
},

'@tags':[],
'Escenario 1: Ingresar a "My customers" en CCP y visualizar la pantalla principal':function(client){
    client
    .waitForElementVisible('button.break-words span',60000)
    .assert.textContains('button.break-words span', 'Documentation')
    .click('button.text-primary')
    .click('p[class*="mt-1 text-sm text-gray-500"]')
    .assert.textContains('section > article > table > thead > tr > th:nth-child(1) > div > button', 'Customer Name')
    },

'@tags':[],
'Escenario 2: Buscar un elemento que no existe':function(client){
    client
    .setValue('input[type="search"]','Is only a test')
    .assert.textContains('p.text-red','No items found')
    },

'@tags':[],
'Escenario 3: Buscar un elemento válido':function(client){
    client
    .setValue('input[type="search"]','ProFlex Inc')
    .assert.textContains('td.text-sm','ProFlex Inc')
},

'@tags':[],
'Escenario 4: Visualizar informacion PEC':function(client){
    client
    .setValue('input[type="search"]','Modern Marketplace CICD Tests - TEST')
    .click('td.text-center>div>button')
    .waitForElementVisible('.col-span-1>div>h4')
    .assert.textContains('.col-span-1>div>h4','PEC enabled')
    .click('div.flex.justify-between.svelte-1jop4pc > svg')
},

'@tags':[],
'Escenario 5: Validar registro sin PEC habilitado':function(client){
    client
    .waitForElementVisible('input[type="search"]',8000)
    .setValue('input[type="search"]','ProFlex Inc')
    .click('td.text-center>div>button')
    .assert.textContains('div[id="notification"] p','Customer PEC was not found')
}

}

