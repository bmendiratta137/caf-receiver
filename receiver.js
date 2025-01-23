// Initialize the Cast Application Framework
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// Log events for debugging
playerManager.addEventListener(cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, () => {
    console.log('Media loaded successfully');
});

playerManager.addEventListener(cast.framework.events.EventType.ERROR, (event) => {
    console.error('Error: ', event);
});

// Start the receiver
context.start();
