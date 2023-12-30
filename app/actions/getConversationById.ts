import getCurrentUser from "./getCurrentUser";
import prisma from "../libs/prismadb";

const getCoversationById = async (conversationId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
    console.error(error, "GET CONVERSATION BY ID ERROR");
    return null;
  }
};

export default getCoversationById;
