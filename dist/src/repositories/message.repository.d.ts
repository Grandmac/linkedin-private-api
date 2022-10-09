import { Client } from '../core/client';
import { ConversationId } from '../entities/conversation.entity';
import { MessageEventCreateResponse } from '../entities/message-create-response.entity';
import { ProfileId } from '../entities/mini-profile.entity';
import { MessageScroller } from '../scrollers';
export declare class MessageRepository {
    private client;
    constructor({ client }: {
        client: Client;
    });
    getMessages({ conversationId, createdBefore }: {
        conversationId: ConversationId;
        createdBefore?: Date;
    }): MessageScroller;
    sendMessage({ profileId, conversationId, text, }: {
        profileId?: ProfileId;
        conversationId?: ConversationId;
        text: string;
    }): Promise<MessageEventCreateResponse>;
    private fetchMessages;
}
