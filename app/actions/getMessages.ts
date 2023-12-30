import prisma from "../libs/prismadb";

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "asc" },
      where: { conversationId },
      include: {
        sender: true,
        seen: true,
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
