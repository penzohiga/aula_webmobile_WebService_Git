"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mysql',
    url: process.env.JAWSDB_URL || 'mysql://root:root@localhost:3306/webmobile',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize: true,
    logging: false
};
//# sourceMappingURL=typeorm.config.js.map