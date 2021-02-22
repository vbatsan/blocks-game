export const isGameFinishSelector = state => state.app.isGameFinish;
export const isGameStartedSelector = state => state.app.isGameStarted;
export const userNameSelector = state => state.app.userName;
export const userCountSelector = state => state.app.userCount;
export const computerCountSelector = state => state.app.computerCount;
export const settingsSelector = state => state.app.settings;
export const blocksSelector = state => state.app.blocks;
export const playingBlocksSelector = state => state.app.playingBlocks;
export const clearFieldSelector = state => state.app.clearField;
export const fieldSizeSelector = state => state.app.settings.field