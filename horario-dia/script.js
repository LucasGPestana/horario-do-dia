function carregar() {  
  var msg = window.document.getElementById('msg')
  var imagem = window.document.getElementById('imagem')
  var corpo = window.document.body
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    msg.innerHTML = `<strong>Bom Dia!</strong><br/>`
    imagem.src = 'fotomanha.png'
    imagem.alt = 'Foto do dia'
    corpo.style.background = '#98D3FB'
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    msg.innerHTML = `<strong>Boa Tarde!</strong><br/>`
    imagem.src = 'fototarde.png'
    imagem.alt = 'Foto da tarde'
    corpo.style.background = '#FDE87F'
  } else if (hora >= 18 && hora < 24){
    msg.innerHTML = `<strong>Boa Noite!</strong><br/>`
    imagem.src = 'fotonoite.png'
    imagem.alt = 'Foto da noite'
    corpo.style.background = '#163E5A'
  } else {
    msg.innerHTML = '<strong>Hora inválida</strong><br/>'
    imagem.src = 'fotolimbo.png'
    imagem.alt = 'Foto do limbo'
    corpo.style.background = '#000000'
  }
  if (hora >= 1 && hora < 2) {
  msg.innerHTML += `Agora é <strong>${("00" + hora).slice(-2)}:${("00" + minuto).slice(-2)} hora</strong>.<br/>`
  }
  if ((hora >= 0 && hora < 1) || (hora >= 2 && hora < 24)) {
    msg.innerHTML += `Agora são <strong>${("00" + hora).slice(-2)}:${("00" + minuto).slice(-2)} horas</strong>.<br/>`
  }
}