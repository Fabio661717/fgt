// Selecione o vídeo e adicione um evento de clique
const video = document.querySelector('video');
video.addEventListener('click', () => {
  window.open('https://app.monetizze.com.br/r/APK25066151', '_blank', 'noopener noreferrer');
});

// Selecione o botão e adicione um evento de clique
const botao = document.querySelector('.botao');
botao.addEventListener('click', () => {
  botao.classList.add('active');
  setTimeout(() => {
    botao.classList.remove('active');
  }, 200);
});

// Configuração das partículas
particlesJS('particles-js', {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#4CAF50'
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 1
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#fe0000',
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'epulse'
      },
      onclick: {
        enable: false,
        mode: 'push'
      }
    }
  },
  retina_detect: true
});

// Adicione o estilo para o botão ativo
const style = document.createElement('style');
style.innerHTML = `
 .botao.active {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
document.head.appendChild(style);

const imagem = document.createElement('img');
imagem.src = 'ranking melhores 2025.jpg';
imagem.alt = 'Imagem';
imagem.onclick = function() {
  window.open('https://www.seulink.com', '_blank');
};
document.body.appendChild(imagem);