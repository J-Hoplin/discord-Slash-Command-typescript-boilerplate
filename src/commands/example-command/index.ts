import { CommandInteraction, PermissionFlagsBits, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import { DiscordCustomClient } from "../../classes";
import { Command, SlashCommandChoice } from "../../types";
import logger from "../../log/index";

/**
 * data require SlashCommand Object
 * 
 * run require logic of SlashCommand that is described command of data field
 */

export const exampleCommand: Command = {
  data: new SlashCommandBuilder(),
  run: async () => { }
}