/* import { v4 as uuid } from 'uuid' */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const instrumentController = () => {
    const getInstruments = async (request, response, next) => {
        const { query } = request

        try {
            const instruments = await prisma.instruments.findMany({
                where: {
                    instrument: {
                        contains: query?.instrument ?? ''
                    }
                }
            })

            const responseFormat = {
                data: instruments,
                message: "Instrument retrieved successfully"
            }

            return response.status(200).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }

    }


    const createInstrument = async (request, response, next) => {
        const newInstrument = request.body

        try {

            const createdInstrument = await prisma.instruments.create({
                data: newInstrument
            })

            const responseFormat = {
                data: createdInstrument,
                message: 'Instrument created successfully'
            }

            //status 201 - created
            return response.status(201).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }

    }


    const getInstrumentbyId = async (request, response, next) => {
        const { id } = request.params;
        const instrumentId = Number(id)
        try {
            const instrument = await prisma.instruments.findUnique({
                where: {
                    id: instrumentId
                }
            })
            const responseFormat = {
                data: instrument,
                message: 'Instrument retrieved successfully'
            }

            return response.status(200).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }


    const updateInstrumentbyId = async (request, response, next) => {
        const { id } = request.params
        const instrumentId = Number(id)
        const newInstrumentData = request.body;
        try {
            const instrument = await prisma.instruments.update({
                where: {
                    id: instrumentId
                },
                data: newInstrumentData
            })

            const responseFormat = {
                data: instrument,
                message: 'Instrument updated successfully'
            }

            return response.status(200).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }


    const deleteInstrumentbyId = async (request, response, next) => {
        const { id } = request.params;
        const instrumentId = Number(id)
        try {
            const instrument = await prisma.instruments.delete({
                where: {
                    id: instrumentId
                }
            })
            const responseFormat = {
                data: instrument,
                message: 'Instrument deleted successfully'
            }

            return response.status(200).json(responseFormat)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }

    }


    return {
        getInstruments,
        createInstrument,
        getInstrumentbyId,
        updateInstrumentbyId,
        deleteInstrumentbyId
    }
}