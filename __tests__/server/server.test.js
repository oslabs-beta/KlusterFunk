import { expect, test } from 'vitest'
import { Request } from 'supertest'

import app from '../../server/server.js'
const server = 'http://localhost:3030'

describe('Route Integration')