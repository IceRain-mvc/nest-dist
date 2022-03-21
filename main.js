"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("./filter/http-exception.filter");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
const serveStatic = require("serve-static");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.setGlobalPrefix('api/v1');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('考试系统api接口')
        .setDescription('在线考试后端接口文档')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    app.use('/public', serveStatic(path.join(__dirname, '../public'), {
        maxAge: '1d',
        extensions: ['jpg', 'jpeg', 'png', 'gif'],
    }));
    await app.listen(4001);
}
bootstrap();
//# sourceMappingURL=main.js.map