import React, { useState } from 'react';
import './Accordion.css';

interface Topic {
  id: number;
  title: string;
  content: string;
}

type TopicCardProps = {
  topic: Topic;
  isOpen: boolean;
};

type AccordionProps = {
  topics: Topic[];
};

export function TopicCard({ topic, isOpen }: TopicCardProps) {
  return (
    <div className="topic-card">
      <h2 className="topic-card-title" data-topic-id={String(topic.id)}>
        {topic.title}
      </h2>
      {isOpen ? <p className="topic-card-content">{topic.content}</p> : null}
    </div>
  );
}

export function Accordion({ topics }: AccordionProps) {
  const [currentTopicId, setCurrentTopicId] = useState(-1);

  function handleTopicClick(event: React.MouseEvent) {
    const $element = event.target! as HTMLElement;
    if ($element.className !== 'topic-card-title') return;
    const topicId = Number($element.dataset.topicId);
    setCurrentTopicId(currentTopicId === topicId ? -1 : topicId);
  }

  return (
    <div className="accordion" onClick={handleTopicClick}>
      {topics.map((t) => {
        return (
          <TopicCard key={t.id} topic={t} isOpen={currentTopicId === t.id} />
        );
      })}
    </div>
  );
}
