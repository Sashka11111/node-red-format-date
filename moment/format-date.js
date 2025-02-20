"use strict";

const moment = require("moment");

/**
 * @param {import("node-red").NodeRedApp} RED
 */
module.exports = function (RED) {
  /**
   * @this {import("node-red").Node & Record<string,any>}
   * @param {import("node-red").NodeSettings<Record<string,any>>} config
   */
  function nodeDefinition(config) {
    const node = this;
    RED.nodes.createNode(this, config);

    // Отримуємо налаштування
    this.inputKey = config.input_key || "payload";
    this.outputKey = config.output_key || "payload";
    this.format = config.format || "YYYY-MM-DD";

    node.on("input", function (msg, send, done) {
      try {
        const value = msg[this.inputKey] || msg.payload;
        const parsedDate = moment(value);

        if (!parsedDate.isValid()) {
          node.warn("Invalid date format");
          return;
        }

        const formattedDate = parsedDate.format(this.format);
        msg[this.outputKey] = formattedDate;
        send(msg);
        done();
      } catch (error) {
        node.error("Error formatting date: " + error.message);
        done(error);
      }
    });
  }

  RED.nodes.registerType("date-formatter", nodeDefinition);
};
