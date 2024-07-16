import slsHttp from 'serverless-http'
import app from './src/app.js'

export const handler = slsHttp(app)