import httpStatus from '../helpers/httpStatus.js'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


import { encrypt, verified } from '../utils/bcrypt.js'

export const instrumentAssignedController = () => {
    const assign = async (request, response, next) => {
        const { body } = request
        const instrumentId = Number(body?.instrumentId ?? null)
        const userId = Number(body?.userId ?? null)
        try {
            const createdAssignment = await prisma.usersAssignedInstruments.create({
                data: {
                    instrumentId,
                    userId
                }
            })
            return response.status(httpStatus.CREATED).json(createdAssignment)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }


    const getAllAssignedInstrument = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)

        try {
            const AssignedInstrument = await prisma.usersAssignedInstruments.findMany({
                where: {
                    userId
                },
                select: {
                    instrumentId: true,
                    userId: true,
                    instrument: {
                        select: {
                            instrument: true,
                            type: true,
                            description: true,
                        }
                    },
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            })
            return response.status(httpStatus.OK).json(AssignedInstrument)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }





    const getAllAssignedInstrumentById = async (request, response, next) => {
        const { params } = request
        const userId = Number(params?.id)

        try {
            const AssignedInstrument = await prisma.usersAssignedInstruments.findMany({
                where: {
                    userId
                },
                select: {
                    instrumentId: true,
                    userId: true,
                    instrument: {
                        select: {
                            instrument: true,
                            type: true,
                            description: true,
                        }
                    },
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            })
            return response.status(httpStatus.OK).json(AssignedInstrument)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }



    return {
        assign,
        getAllAssignedInstrument,
        getAllAssignedInstrumentById
    }
}
