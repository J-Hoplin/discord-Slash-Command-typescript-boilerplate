import Discord, { ClientOptions, Collection } from 'discord.js'
import { Command, DiscordAssets } from '../types';

class DiscordCustomClient extends Discord.Client {
    public commands: Collection<string, Command> = new Collection();
    constructor(options: ClientOptions, assets?: DiscordAssets) {
        super(options)

        //If assets is not null
        if (assets) {
            const { commands } = assets
            // Enroll Commands
            commands.map((x: Command) => {
                this.commands.set(x.data.name, x);
            })
        }
    }
}

export default DiscordCustomClient