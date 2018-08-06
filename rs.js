import {hiscores} from 'osrs-wrapper'

export const getRsPlayer = async (playerName) => {
    const player = await hiscores.getPlayer(playerName);

    return player
}