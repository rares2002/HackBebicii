import Stripe from 'stripe'
import { PrismaService } from 'src/prisma/prisma.service'

export class StripeService {
    constructor(private readonly stripeApi: Stripe, private readonly prisma: PrismaService) {
        this.stripeApi = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {
            apiVersion: '2022-11-15'
        })
        this.prisma = new PrismaService
    }
    async cardService(number: string, exp_month: number, exp_year: number, cvc: string, user: number) {
        const credit_card_data = await this.stripeApi.paymentMethods.create({
            type: 'card',
            card: {
                number,
                exp_month,
                exp_year,
                cvc
            }
        })
        console.log(credit_card_data)
        const userFound = await this.prisma.user.findUnique({
            where: {
                id: user
            }
        })
        console.log(userFound)
        const userCards = JSON.parse(userFound.cards || '[]')
        return await this.prisma.user.update({
            where: {
                id: user
            },
            data: {
                cards: JSON.stringify([...userCards, credit_card_data.id])

            }
        })
    }
    async getMyCards(user: any) {

        console.log(user)
        const foundUser = await this.prisma.user.findUnique({
            where: {
                id: user.id
            }
        })
        const ids = JSON.parse(foundUser.cards);
        console.log(ids);

        const idsDetails = await Promise.all(ids.map( async (value) => {
            return await this.stripeApi.paymentMethods.retrieve(value)
        }))
        console.log(idsDetails)
    }
}