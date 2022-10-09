"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRequest = void 0;
class MessageRequest {
    constructor({ request }) {
        this.request = request;
    }
    sendMessage({ profileId, conversationId, text }) {
        const queryParams = {
            action: 'create',
        };
        const directMessagePayload = {
            keyVersion: 'LEGACY_INBOX',
            conversationCreate: {
                eventCreate: {
                    value: {
                        'com.linkedin.voyager.messaging.create.MessageCreate': {
                            attributedBody: {
                                text,
                                attributes: [],
                            },
                            attachments: [],
                        },
                    },
                },
                subtype: 'MEMBER_TO_MEMBER',
                recipients: [profileId],
            },
        };
        const conversationPayload = {
            eventCreate: {
                originToken: '54b3a724-59c5-4cf2-adbd-660483010a87',
                value: {
                    'com.linkedin.voyager.messaging.create.MessageCreate': {
                        attributedBody: { text, attributes: [] },
                        attachments: [],
                    },
                },
            },
            dedupeByClientGeneratedToken: false,
        };
        const conversationUrl = `messaging/conversations/${conversationId}/events`;
        const directMessageUrl = 'messaging/conversations';
        const payload = conversationId ? conversationPayload : directMessagePayload;
        const url = conversationId ? conversationUrl : directMessageUrl;
        return this.request.post(url, payload, { params: queryParams });
    }
    getMessages({ conversationId, createdBefore, }) {
        const queryParams = {
            keyVersion: 'LEGACY_INBOX',
            ...(createdBefore && { createdBefore: createdBefore.getTime() }),
        };
        return this.request.get(`messaging/conversations/${conversationId}/events`, {
            params: queryParams,
        });
    }
}
exports.MessageRequest = MessageRequest;
//# sourceMappingURL=message.request.js.map