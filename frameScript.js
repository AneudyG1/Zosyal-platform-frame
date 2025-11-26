
    // Update day
    function updateDay() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date().getDay();
      document.getElementById('currentDay').textContent = days[today];
    }

    // Toggle Messages
    function toggleMessages() {
      const messageBox = document.getElementById('messageBox');
      messageBox.classList.toggle('show');
    }

    // Toggle Side Panel
    function toggleSidePanel() {
      const panel = document.getElementById('sidePanel');
      const overlay = document.getElementById('overlay');
      
      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        overlay.classList.remove('show');
      } else {
        panel.classList.add('show');
        overlay.classList.add('show');
        document.getElementById('settingsPanel').classList.remove('show');
      }
    }

    // Toggle Settings
    function toggleSettings() {
      const panel = document.getElementById('settingsPanel');
      const overlay = document.getElementById('overlay');
      
      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        overlay.classList.remove('show');
      } else {
        panel.classList.add('show');
        overlay.classList.add('show');
        document.getElementById('sidePanel').classList.remove('show');
      }
    }

    // Open Modal
    function openSearchModal() {
      document.getElementById('searchModal').classList.add('show');
    }

    function openShareModal() {
      document.getElementById('shareModal').classList.add('show');
    }

    function openAIModal() {
      document.getElementById('aiModal').classList.add('show');
    }

    // Close Modal
    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('show');
    }

    // Show Notification
    function showNotification(message, type = 'info') {
      const toast = document.getElementById('notificationToast');
      const text = document.getElementById('notificationText');
      const icon = toast.querySelector('.notification-icon');
      
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      };
      
      icon.textContent = icons[type] || icons.info;
      text.textContent = message;
      
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // Close panels/modals with overlay click
    document.getElementById('overlay').addEventListener('click', function() {
      document.getElementById('sidePanel').classList.remove('show');
      document.getElementById('settingsPanel').classList.remove('show');
      this.classList.remove('show');
    });

    // Close modals on outside click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('show');
        }
      });
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.getElementById('sidePanel').classList.remove('show');
        document.getElementById('settingsPanel').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
        document.getElementById('messageBox').classList.remove('show');
      }
    });

    // Initialize
    document.addEventListener('DOMContentLoaded', updateDay);
