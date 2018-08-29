const button = document.querySelector('#button')

button.addEventListener('click', async () => {
  const { LoggerAdapter } = await import(/* webpackChunkName: "LoggerAdapter" */ './LoggerAdapter')

  LoggerAdapter.log('oi')
})