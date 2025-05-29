export const triggerNotification = (type: 'contact' | 'download') => {
  const currentCount = parseInt(
    localStorage.getItem('newMessageCount') || '0',
    10
  );
  const newCount = currentCount + 1;

  console.log(`[triggerNotification] ${type} count: ${newCount}`); // 🔍 debug

  localStorage.setItem('newMessageCount', newCount.toString());

  const event = new CustomEvent('notify', {
    detail: {
      type,
      count: newCount,
    },
  });
  window.dispatchEvent(event);
};
